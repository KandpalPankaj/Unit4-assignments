const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    userId:{
        tuype:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    
},
{
    timestamps:true,
    versionKey:false
})

const Employee = mongoose.model("employee",employeeSchema);
module.exports=Employee;