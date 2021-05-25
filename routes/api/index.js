const router = require("express").Router();
const portfolioRoutes = require("./portfolio");


// portfolio routes
router.use("/portfolio", portfolioRoutes);


module.exports = router;