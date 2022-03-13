const express=require("express");
const app=express();
const Checkout= require("../models/checkout.models");

app.get("",async(req,res)=>{
    try{
        const checkout=await Checkout.find().lean().exec();
        return res.status(200).send(checkout)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("",async (req,res)=>{
   try{
     
    const checkout = await Checkout.create(req.body);
        return res.status(201).send({checkout})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

module.exports= app;