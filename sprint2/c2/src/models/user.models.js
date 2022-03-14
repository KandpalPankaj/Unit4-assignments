const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String,required:false}, //(optional)
    lastName:{type:String,required:true},// (required)
    age:{type:Number,required:true}, //(required)
    email:{type:String,required:true, unique:true},// (required )
    address:{type:String,required:true},// ( required )
    gender:{type:String,required:false,default:"Female"}, //( optional and should default to Female )
    type:{type:String,required:false, default:"customer"},// (optional and it can take value of customer or employee and if not provided then default to customer )
},
{
    timestamps:true,
    versionKey:false
})

const User = mongoose.model("user",userSchema);
module.exports=User;