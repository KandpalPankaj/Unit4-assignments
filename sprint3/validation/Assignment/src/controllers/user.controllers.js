const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post(
  "/",
  body("first_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    ,
    body("last_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Last Name cannot be empty"),

  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
    body("pincode")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Pincode cannot be empty")
    .isNumeric()
    .withMessage("pincode must be a number")
    .custom((val)=>{
      if(val<100000 || val>1000000){
        throw new Error("Incorrect pincode provided");
      }
      return true;
    })
    ,
  body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 100")
    .custom((val) => {
      if (val < 1 || val > 100) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),
    body("gender")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("gender cannot be empty")
    .custom((val)=>{
      if(val!="Male" && val!="Female" && val!="Other")
      {
        throw new Error("gender must be Male/Female/Other");
      }
      return true
    })
    ,
  async (req, res) => {
    try {
      // console.log(body("firstName"));
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;

