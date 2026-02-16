const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.render("User Page");
});

module.exports = userRouter;
