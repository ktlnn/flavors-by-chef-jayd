const router = require("express").Router();
const menuController = require("../../controllers/menuController");


// Matches with "/api/menu"
router.route("/")
  .get(menuController.findAll);

// Matches with "/api/menu/:id"
router
  .route("/:id")
  .get(menuController.findById)

module.exports = router;