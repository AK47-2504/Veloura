const mongoose = require("mongoose");

async function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Database Connection Failed");
      console.log(err);
    });
}

module.exports = connectDB;
