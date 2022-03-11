const express= require("express");
const mongoose= require("mongoose");

const app =express();
app.use(express.json());
const connect = () => {
    return mongoose.connect("mongodb+srv://pankajKandpal:pankand@cluster0.g4xc3.mongodb.net/mongoRelationAssignment1?retryWrites=true&w=majority")
};

const sectionSchema= new mongoose.Schema({
    name:{type:String,required:true},
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author",
        required:true
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    },
}
,

{
    versionKey:false
});
const Section= mongoose.model("section",sectionSchema);

const booksSchema= new mongoose.Schema({
 name:{type:String,required:true},
 publication:{type:String,required:true},
 price:{type:Number,required:true},
 authorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"author",
    required:true
}
},
{
    versionKey:false
})

const Books =mongoose.model("book",booksSchema)

const authorsSchema= new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:false},
   },
   {
       versionKey:false
   })
   
   const Authors =mongoose.model("author",authorsSchema)


//    authors CRUD
app.get("/authors",async(req,res)=>{
    try{
        const authors=await Authors.find().lean().exec();
        return res.status(200).send(authors)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("/authors",async (req,res)=>{
   try{
    const authors = await Authors.create(req.body);
        return res.status(201).send({user:authors})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

app.get("/authors/:id",async(req,res)=>{
    try{
        const authors = await Authors.findById(req.params.id).lean().exec();
        return res.status(200).send(authors);
    }
    catch(err){
        return res.status(500).send({ message: err.message });

    }
})

app.patch("/authors/:id", async (req, res) => {
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

  app.delete("/authors/:id", async (req, res) => {
    try {
      const authors = await Authors.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(authors);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
//    books CRUD
  app.get("/books",async(req,res)=>{
    try{
        const books=await Books.find().lean().exec();
        return res.status(200).send(books)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("/books",async (req,res)=>{
   try{
    const books = await Books.create(req.body);
        return res.status(201).send({user:books})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

app.get("/books/:id",async(req,res)=>{
    try{
        const books = await Books.findById(req.params.id).lean().exec();
        return res.status(200).send(books);
    }
    catch(err){
        return res.status(500).send({ message: err.message });

    }
})

app.patch("/books/:id", async (req, res) => {
    try {
      const books = await Books.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(books);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.delete("/books/:id", async (req, res) => {
    try {
      const books = await Books.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(books);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  //    section CRUD
  app.get("/sections",async(req,res)=>{
    try{
        const sections=await Section.find().lean().exec();
        return res.status(200).send(sections)
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("/sections",async (req,res)=>{
   try{
    const sections = await Section.create(req.body);
        return res.status(201).send({user:sections})
   }
   catch(err){
    return res.status(500).send({message:err.message})
   }
})

app.get("/sections/:id",async(req,res)=>{
    try{
        const sections = await Section.findById(req.params.id).lean().exec();
        return res.status(200).send(sections);
    }
    catch(err){
        return res.status(500).send({ message: err.message });

    }
})

app.patch("/sections/:id", async (req, res) => {
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

  app.delete("/sections/:id", async (req, res) => {
    try {
      const sections = await Section.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(sections);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
app.listen(4000, async () => {
    try 
    {
      await connect();
    } 
    catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 4000");
  });