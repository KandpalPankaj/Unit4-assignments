const express =require("express");
const SavingAccount =require("../models/saving.models");
const app= express();

app.post("",async(req,res)=>{
    try{
        const saving= await SavingAccount.create(req.body);
        return res.status(201).send(saving)
    }
    catch(err){
return res.status(500).send({message:err.message})
    }
})

module.exports=app;