const mongoose = require("mongoose");
const debug = require("debug")("development:database");

async function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      debug("Database Connected Successfully");
    })
    .catch((err) => {
      debug("Database Connection Failed");
      debug(err);
    });
}

module.exports = connectDB;
