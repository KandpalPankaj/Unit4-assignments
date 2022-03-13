const express= require("express");
const app =express();
const Section= require("../models/section.models");

app.get("",async(req,res)=>{
    try{
        const sections=await Section.find().lean().exec();
        return res.status(200).send(sections)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("",async (req,res)=>{
   try{
    const sections = await Section.create(req.body);
        return res.status(201).send({user:sections})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

app.get("/:id",async(req,res)=>{
    try{
        const sections = await Section.findById(req.params.id).lean().exec();
        return res.status(200).send(sections);
    }
    catch(err){
        return res.status(500).send({ message: err.message });

    }
})

app.patch("/:id", async (req, res) => {
    try {
      const sections = await Section.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(sections);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.delete("/:id", async (req, res) => {
    try {
      const sections = await Section.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(sections);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.get("/:sectionId/books", async (req, res) => {
    try {
      const books = await Books.find({sectionId:req.params.sectionId}).lean().exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(books);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = app;