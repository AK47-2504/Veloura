const express = require("express");
const ownerRouter = express.Router();
const ownerModel = require("../models/ownerModel");

ownerRouter.post("/create", async (req, res) => {
  let owners = await ownerModel.find();
  if (owners.length > 0) {
    return res.status(500).json({
      message: "You Dont Have Permission to Create Owner",
    });
  }

  const { fullName, email, password } = req.body;

  let createdOwner = await ownerModel.create({
    fullName,
    email,
    password,
  });

  res.status(200).json({
    message: "Owner Created Successfully",
    createdOwner,
  });
});

module.exports = ownerRouter;
