const restaurantController = require("../controllers/restaurantController");
const express = require("express");
const router = express.Router();

router.post("/", restaurantController.getRestaurants);


module.exports = router;
