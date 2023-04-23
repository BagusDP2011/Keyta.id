const userAuthController = require("../controllers/userAuthController");
const express = require("express");
// const { upload } = require("../lib/uploader");
// const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", userAuthController.register);
router.delete("/:id", userAuthController.deleteUser);
router.put("/:id", userAuthController.putUser);


module.exports = router;
