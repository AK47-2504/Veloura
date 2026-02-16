const express = require("express");
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.render("Product Page");
});
module.exports = productRouter;