const express =require("express");
const MasterAccount =require("../models/master.models");
const app= express();

app.get("",async(req,res)=>{
    try{
        const master= await MasterAccount.find()
        .populate("userId")
        .lean().exec();
        return res.status(200).send(master)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const master= await MasterAccount.findById(req.params.id)
        .populate({path:"savingId", select:["account_number ","balance"]})
        .populate({path:"fixedId", select:["account_number ","balance"]})
        .lean().exec();
        return res.status(200).send(master)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})
app.post("",async(req,res)=>{
    try{
        const master= await MasterAccount.create(req.body);
        return res.status(201).send(master)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})

module.exports=app;