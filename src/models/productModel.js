const { text } = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  producrtPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
    default: 0,
  },
  productDiscount: {
    type: Number,
    default: 0,
  },
  bgcolor: {
    type: String,
    default: "#fff",
  },
  panelColor: {
    type: String,
    default: "#cdcdcd",
  },
  textColor: {
    type: String,
    default: "#000",
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
