const express = require("express");
const router = express.Router();
const User = require("../models/user.models");
const transporter = require("../configs/mail");
const path = require("path");

router.get("", async (req, res) => {
  try {
    console.log("hi");
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', // sender address
      to: user.email, // list of receivers
      subject: `Welcome to ABC System ${user.first_name} ${user.last_name}`, // Subject line
      text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
    
    });

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', 
      to: ["admin1@amazon.com","admin2@amazon.com","admin3@amazon.com","admin4@amazon.com","admin5@amazon.com"], 
      subject: `${user.first_name} ${user.last_name} has registered with us`,
      text: `Please welcome  ${user.first_name} ${user.last_name}`, 
    
    });
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
