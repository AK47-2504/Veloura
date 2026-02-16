const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
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
  product: {
    type: Array,
    default: [],
  },

  picture: {
    type: String,
    default: "",
  },
  gstin: {
    type: String,
  },
});
const ownerModel = mongoose.model("owners", userSchema);
module.exports = ownerModel;
