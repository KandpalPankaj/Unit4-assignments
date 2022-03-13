const express= require("express");
const mongoose= require("mongoose");

const usersController = require("./controllers/user.controllers");
const sectionController= require("./controllers/section.controllers");
const bookController = require("./controllers/book.controllers");
const authorController =require("./controllers/author.controllers");
const authorBookController =require("./controllers/authorBook.controller");
const checkoutController =require("./controllers/checkout.controllers")
const app =express();
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb+srv://pankajKandpal:pankand@cluster0.g4xc3.mongodb.net/mongoRelationAssignment1?retryWrites=true&w=majority")
};

app.use("/users", usersController); 
app.use("/sections",sectionController);
app.use("/books",bookController);
app.use("/authors",authorController);
app.use("/authorBooks",authorBookController);
app.use("/checkouts",checkoutController)
// 


  

 






  module.exports = app;