const express = require("express");
const Book = require("../models/book.model");
const { body, validationResult } = require("express-validator");
const route = express.Router();

route.post(
  "",
  body("likes")
    .isNumeric()
    .withMessage("likes should be number")
    .custom((value) => {
      if (value.length < 0) {
        throw new Error("likes should be positive");
      }
      return true;
    }),
  body("coverImage")
    .trim()
    .not()
    .isEmpty()
    .withMessage("coverImage is required")
    .isString()
    .withMessage("img url should be string")
    .custom((value) => {
      if (value.length < 3 || value.length > 30) {
        throw new Error("length not correct");
      }
      return true;
    }),
  body("content")
    .trim()
    .not()
    .isEmpty()
    .withMessage("content is required")
    .isString()
    .withMessage("content should be string"),
  async (req, re) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ err: errors.array() });
      }

      const users = await Book.create(req.body);
      return res.status(201).send({ user: users });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);
route.get("", async (req, res) => {
  try {
    // pagination
    const page = req.query.page || 1;
    const pagesize = 10;
    const skip = (page - 1) * pagesize;
    const book = await Book.find().skip(skip).linit(pagesize).lean().exec();
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = route;
