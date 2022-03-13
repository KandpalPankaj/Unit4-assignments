const express =require ("express");
const app =express();
const AuthorBook=require("../models/authorBook.models");

app.get("",async(req,res)=>{
    try{
        const authorBooks=await AuthorBook.find().lean().exec();
        return res.status(200).send(authorBooks)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
  })
  app.post("",async (req,res)=>{
   try{
    const authorBooks = await AuthorBook.create(req.body);
        return res.status(201).send({authorandbook:authorBooks})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
  })
  
  app.get("/:id",async(req,res)=>{
    try{
        const authorBooks = await AuthorBook.findById(req.params.id).lean().exec();
        return res.status(200).send(authorBooks);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
  
    }
  })

  module.exports= app;