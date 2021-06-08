const mongoose = require("mongoose");
const db = require("../models");

const asyncDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Flavors", {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

asyncDB();

const portfolio = [
  {
    portfolioImage: "/assets/chicken.png",
    category: "food",
  },
  {
    portfolioImage: "/assets/steak.png",
    category: "food",
  },
  {
    portfolioImage: "/assets/seafood.png",
    category: "food",
  },
];

db.Portfolio.deleteMany({})
  .then(() => {
    return db.Portfolio.collection.insertMany(portfolio);
  })
  .then((data) => {
    mongoose.connection.close();
  });
