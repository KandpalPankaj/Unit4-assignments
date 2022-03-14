const express =require("express");
const FixedAccount =require("../models/fixed.models");
const app= express();

app.post("",async(req,res)=>{
    try{
        const fixed= await FixedAccount.create(req.body);
        return res.status(201).send(fixed)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})

module.exports=app;
