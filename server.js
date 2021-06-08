const express = require("express");
const router = express.Router();
const cors = require("cors");
// const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
// micro provides http helpers
const { createError, json, send } = require('micro');
// microrouter provides http server routing
const { router, get, post } = require('microrouter');

// async-retry will retry failed API requests
const retry = require('async-retry');

// logger gives us insight into what's happening
const logger = require('./server/logger');
// schema validates incoming requests
const { validatePaymentPayload } = require('./server/schema');
// square provides the API client and error types
const { ApiError, client: square } = require('./server/square');
const { nanoid } = require('nanoid');

async function createPayment(req, res) {
  const payload = await json(req);
  logger.debug(JSON.stringify(payload));
  // We validate the payload for specific fields. You may disable this feature
  // if you would prefer to handle payload validation on your own.
  if (!validatePaymentPayload(payload)) {
    throw createError(400, 'Bad Request');
  }
  await retry(async (bail, attempt) => {
    try {
      logger.debug('Creating payment', { attempt });

      const idempotencyKey = payload.idempotencyKey || nanoid();
      const payment = {
        idempotencyKey,
        locationId: payload.locationId,
        sourceId: payload.sourceId,
        // While it's tempting to pass this data from the client
        // Doing so allows bad actor to modify these values
        // Instead, leverage Orders to create an order on the server
        // and pass the Order ID to createPayment rather than raw amounts
        // See Orders documentation: https://developer.squareup.com/docs/orders-api/what-it-does
        amountMoney: {
          // the expected amount is in cents, meaning this is $1.00.
          amount: '100',
          // If you are a non-US account, you must change the currency to match the country in which
          // you are accepting the payment.
          currency: 'USD',
        },
      };

      // VerificationDetails is part of Secure Card Authentication.
      // This part of the payload is highly recommended (and required for some countries)
      // for 'unauthenticated' payment methods like Cards.
      if (payload.verificationToken) {
        payment.verificationToken = payload.verificationToken;
      }

      const { result, statusCode } = await square.paymentsApi.createPayment(
        payment
      );

      logger.info('Payment succeeded!', { result, statusCode });

      send(res, statusCode, {
        success: true,
        payment: {
          id: result.payment.id,
          status: result.payment.status,
          receiptUrl: result.payment.receiptUrl,
          orderId: result.payment.orderId,
        },
      });
    } catch (ex) {
      if (ex instanceof ApiError) {
        // likely an error in the request. don't retry
        logger.error(ex.errors);
        bail(ex);
      } else {
        // IDEA: send to error reporting service
        logger.error(`Error creating payment on attempt ${attempt}: ${ex}`);
        throw ex; // to attempt retry
      }
    }
  });
}



app.use(cors());

app.use("/", router);

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "orders@flavorsjayd.com",
//     pass: "Consistencyisdeath91",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}


app.use(routes);

// export routes to be served by micro
module.exports = router(
  post('/payment', createPayment),
  get('/*', serveStatic)
);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Flavors");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
