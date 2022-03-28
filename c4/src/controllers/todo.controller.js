const express = require("express");
const Todo = require("../models/todo.model");
const authenticate = require("../middleware/aunthenticate");
const route = express.Router();

route.get("", authenticate, async (req, res) => {
  try {
    const todo = await Todo.find().lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

route.post("", authenticate, async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).send(todo);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

route.get("/:id", authenticate, async (req, res) => {
  try {
      if(req.userId==req.params.id)
    {
    const todo = await Todo.findById(req.params.id).lean().exec();
    return res.status(200).send(todo);
    }
    else{
        return res.status(401).send({ message: "user invalid" });

    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
route.patch("/:id", authenticate, async (req, res) => {
  try {
    if(req.userId==req.params.id)
    {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
      .lean()
      .exec();
    return res.status(200).send(todo);
    }
    else{
        return res.status(401).send({ message: "user invalid" });

    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
route.delete("/:id", authenticate, async (req, res) => {
  try {
    if(req.userId==req.params.id)
    {
    const todo = await Todo.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send(todo);
    }
    else{
        return res.status(401).send({ message: "user invalid" });

    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = route;
