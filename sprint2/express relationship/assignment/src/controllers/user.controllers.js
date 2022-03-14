const express = require("express");
const User = require("../models/user.models");
const app =express();

app.get("",async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        return res.status(200).send(users)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("",async (req,res)=>{
   try{
    const users = await User.create(req.body);
        return res.status(201).send({user:users})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

app.get("/:id",async(req,res)=>{
    try{
      
        const users = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(users);
    }
    catch(err){
        return res.status(500).send({ message: err.message });

    }
})

module.exports = app;