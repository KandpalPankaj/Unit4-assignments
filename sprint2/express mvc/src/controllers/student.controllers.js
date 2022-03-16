const express =require("express");
const Student =require("../models/student.models");
const app= express();

app.get("",async(req,res)=>{
    try{
        const student= await Student.find().lean().exec();
        return res.status(200).send(student)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})
app.post("",async(req,res)=>{
    try{
        const student= await Student.create(req.body);
        return res.status(201).send(student)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})

module.exports=app;