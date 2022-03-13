const mongoose= require("mongoose");


const booksSchema= new mongoose.Schema({
    name:{type:String,required:true},
    body:{type:String,required:true},
    sectionId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"section",
       required:true
   }
   },
   {
       versionKey:false
   })
   
   const Books =mongoose.model("book",booksSchema)

   module.exports= Books;