const express = require("express");
const User = require("../models/user.model");
const { body, validationResult } = require("express-validator");
const route = express.Router();

route.post(
  "",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("firstName is required")
    .isString()
    .withMessage("firstName should be string")
    .custom((value) => {
      if (value.length < 3 || value.length > 30) {
        throw new Error("length not correct");
      }
      return true;
    }),
  body("lastName")
    .isString()
    .withMessage("firstName should be string")
    .custom((value) => {
      if (value.length < 3 || value.length > 30) {
        throw new Error("length not correct");
      }
      return true;
    }),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("age is required")
    .isNumeric()
    .withMessage("age should be number")
    .custom((value) => {
      if (value < 1 || value > 150) {
        throw new Error("length not correct");
      }
      return true;
    }),
    body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is required")
    .isString()
    .withMessage("email should be string")
    ,
  async (req, re) => {
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send({err:errors.array()})
        }
      const users = await User.create(req.body);
      return res.status(201).send({ user: users });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = route;
