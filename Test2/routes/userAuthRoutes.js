const userAuthController = require("../controllers/userAuthController");
const express = require("express");
const router = express.Router();

router.post("/", userAuthController.register);
router.delete("/:id", userAuthController.deleteUser);
router.put("/:id", userAuthController.putUser);

module.exports = router;
