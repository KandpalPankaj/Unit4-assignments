const mongoose = require("mongoose");

const masterAccSchema = new mongoose.Schema({
    balance:{type:Number,required:true}, // (required and number )
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true
    },
    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"employee",
        required:true
    },
    branchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        required:true
    },
    savingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        required:true
    },
    fixedId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fixed",
        required:true
    },

},
{
    timestamps:true,
    versionKey:false
})

const MasterAccount = mongoose.model("masterAccount",masterAccSchema);
module.exports=MasterAccount;