const router = require("express").Router();
const portfolioController = require("../../controllers/portfolioController");

// Matches with "/api/portfolio"
router.route("/")
  .get(portfolioController.findAll);

// Matches with "/api/portfolio/:id"
router
  .route("/:id")
  .get(portfolioController.findById)

module.exports = router;