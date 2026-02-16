const express = require("express");
const app = express();
const connectDB = require("./config/database");
const onwnerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");

const cookieParser = require("cookie-parser");
const path = require("path");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/owner", onwnerRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

module.exports = app;
