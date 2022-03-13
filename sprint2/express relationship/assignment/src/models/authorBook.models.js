const mongoose =require("mongoose");

const authorBookSchema= new mongoose.Schema({
    authorId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"author",
      required:true
  },
  bookId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"book",
    required:true
},
  },
  {
      versionKey:false
   })
   const AuthorBook =mongoose.model("authorBook",authorBookSchema);

   module.exports= AuthorBook;