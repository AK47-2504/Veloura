const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

module.exports = app;
