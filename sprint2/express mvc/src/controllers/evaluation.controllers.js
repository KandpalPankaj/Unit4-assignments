const express = require("express");
const Evaluation = require("../models/evaluation.model");
const app = express();

app.get("", async (req, res) => {
  try {
    const evaluation = await Evaluation.find().lean().exec();
    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
app.post("", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    return res.status(201).send(evaluation);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = app;
