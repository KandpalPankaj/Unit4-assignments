const express = require("express");
const app = express();
app.use(express.json());

const register = require("./controllers/user.controllers");
const bookController = require("./controllers/book.controllers");
const commentController=require("./controllers/comment.controllers");

app.use("/register", register);
app.use("/books", bookController);
app.use("comments",commentController);

module.exports = app;
