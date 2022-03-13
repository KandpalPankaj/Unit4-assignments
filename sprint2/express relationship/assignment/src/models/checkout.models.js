const mongoose = require("mongoose");

const checkoutSchema= new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true
  },
  bookId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"book",
    required:true
},
checkOutTime:{type:String,required:false},
checkInTime:{type:String,required:false}
},
{
    versionKey:false
   })
   const Checkout =mongoose.model("checkout",checkoutSchema);

   module.exports= Checkout;