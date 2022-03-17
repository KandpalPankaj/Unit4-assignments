const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://pankajKandpal:pankand@cluster0.g4xc3.mongodb.net/pagination?retryWrites=true&w=majority"
    );
};
