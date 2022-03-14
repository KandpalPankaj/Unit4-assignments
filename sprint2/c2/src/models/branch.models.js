const mongoose = require("mongoose");

const branchDetailsSchema = new mongoose.Schema({
    name:{type:String,required:true}, //(required)
    address:{type:String,required:true}, //(required)
    IFSC:{type:String,required:true}, // (required and string)
    MICR:{type:Number,required:true} // (required and number )
},
{
    timestamps:true,
    versionKey:false
})

const Branch = mongoose.model("branch",branchDetailsSchema);
module.exports=Branch;