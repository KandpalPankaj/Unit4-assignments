const mongoose = require("mongoose");

const savingAccSchema = new mongoose.Schema({
    account_number:{type:Number,required:true, unique:true}, //( required and should be unique)
    balance:{type:Number,required:true}, // (required and number )
    interestRatebalance:{type:Number,required:true}, // ( required )
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

const SavingAccount = mongoose.model("savingAccount",savingAccSchema);
module.exports=SavingAccount;