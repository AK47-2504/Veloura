const mongoose = require("mongoose");
const debug = require("debug")("development:database");

async function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      debug("Database Connected Successfully");
      console.log("Database connected");
    })
    .catch((err) => {
      debug("Database Connection Failed");
      debug(err);
    });
}

module.exports = connectDB;
