const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/auth.controller");

router.post("/register", AuthController.CreateUser);
router.post("/login", AuthController.SingIn);

module.exports = router;
