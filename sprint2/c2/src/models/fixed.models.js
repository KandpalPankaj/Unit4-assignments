const mongoose = require("mongoose");

const fixedAccSchema = new mongoose.Schema({
    account_number:{type:Number,required:true}, //  ( required and should be unique)
    balance:{type:Number,required:true}, // (required and number )
    interestRate:{type:Number,required:true}, //  ( required )
    startDate:{type:String,required:true}, //  ( required )
    maturityDate:{type:String,required:true}, //  (required )
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
},
{
    timestamps:true,
    versionKey:false
})

const FixedAccount = mongoose.model("fixedAccount",fixedAccSchema);
module.exports=FixedAccount;