const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authControllers");

authRouter.post("/login", authController.loginController);

module.exports = authRouter;
