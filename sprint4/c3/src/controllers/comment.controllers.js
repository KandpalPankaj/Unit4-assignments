const express = require("express");
const Comment = require("../models/comment.model");
const { body, validationResult } = require("express-validator");
const route = express.Router();

route.post(
  "",
  body("body")
    .trim()
    .not()
    .isEmpty()
    .withMessage("body is required")
    .isString()
    .withMessage("body should be string")
    .custom((value) => {
      if (value.length < 3 || value.length > 30) {
        throw new Error("length not correct");
      }
      return true;
    }),
  async (req, re) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ err: errors.array() });
      }
      const users = await Comment.create(req.body);
      return res.status(201).send({ user: users });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = route;
