const mongoose= require("mongoose");

const authorsSchema= new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true
  }
     },
     {
         versionKey:false
     })
     
     const Authors =mongoose.model("author",authorsSchema);

     module.exports= Authors;