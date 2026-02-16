const express = require("express");
const ownerRouter = express.Router();

ownerRouter.get("/", (req, res) => {
  res.render("Owner Page");
});


module.exports = ownerRouter;