const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    portfolioImage: String,
    category: String,
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema); //compiling schema into a model

module.exports = Portfolio;
