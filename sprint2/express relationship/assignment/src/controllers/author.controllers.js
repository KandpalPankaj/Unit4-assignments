const express= require("express");
const app= express();
const Authors=require("../models/authore.models")

app.get("",async(req,res)=>{
    try{
        const authors=await Authors.find().lean().exec();
        return res.status(200).send(authors)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("",async (req,res)=>{
   try{
    const authors = await Authors.create(req.body);
        return res.status(201).send({user:authors})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

app.get("/:id",async(req,res)=>{
    try{
        const authors = await Authors.findById(req.params.id).lean().exec();
        return res.status(200).send(authors);
    }
    catch(err){
        return res.status(500).send({ message: err.message });

    }
})

app.patch("/:id", async (req, res) => {
    try {
      const authors = await Authors.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(authors);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.delete("/:id", async (req, res) => {
    try {
      const authors = await Authors.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(authors);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.get("/:authorId/authorBooks", async (req, res) => {
    try {
      console.log(req.params.authorId)
      const authorandbook = await AuthorBook.find({authorId:req.params.authorId})
      .populate({path:"authorId",select:["userId"],
      populate:{path:"userId",select:["firstname","lastname"]}
    })
    .populate({path:"bookId",select:["name"]})
      .lean()
      .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(authorandbook);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = app;
