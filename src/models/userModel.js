const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  orders: {
    type: Array,
    default: [],
  },
  number: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: "",
  },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
