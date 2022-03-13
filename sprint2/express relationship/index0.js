const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb+srv://pankajKandpal:pankand@cluster0.g4xc3.mongodb.net/express-relation?retryWrites=true&w=majority")
};
// User schema
// step1-creating the schema
const userSchema = new mongoose.Schema({
    firstName:{type: String, required: true}, 
    lastName:{type: String, required: false}, //false means its not required
    email:{type: String, required: true, unique:true}, // no two doc has same email by unique true
    password: {type: String, required: true},
},
{
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
)


// step2- creating the model
const User =mongoose.model("user",userSchema);

// post Schema
// step1-creating the schema
const postSchema= new mongoose.Schema(
    {
    title:{type: String, required: true},
    body:{type: String, required: true},
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
          ref:"user",
          required: true,  
    },
    },
    {
        versionKey: false,
        timestamps:true  // it gives created at, updated at
    }
);
// step2- creating the model
const Post = mongoose.model("post",postSchema);

// comment Schema
// step1-creating the schema
const commentSchema= new mongoose.Schema(
    {
    body:{type: String, required: true},
    postId:{
        type: mongoose.Schema.Types.ObjectId, 
          ref:"post",
          required: true, 
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
          ref:"user",
          required: true,  
    },
    },
    {
        versionKey: false,
        timestamps: true  // it gives created at, updated at
    }
);
// step2- creating the model
const Comment = mongoose.model("comment",commentSchema);

// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server

// USERS CRUD

app.get("/users",async (req,res)=>{
    try{
    const users = await User.find().lean().exec();
    return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:"something went wrong"})
    }
})

app.post("/users",async (req,res)=>{
    try{
        const users = await User.create(req.body);
        return res.status(201).send({user:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

// body => req.body
// url => req.params
// query string => req.query

app.get("/users/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.patch("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
// POSTS CRUD
app.get("/posts", async (req, res) => {
    try {
      const posts = await Post.find().lean().exec();
  
      return res.status(200).send(posts);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.post("/posts", async (req, res) => {
    try {
      const post = await Post.create(req.body);
  
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.get("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).lean().exec();
  
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.listen(5000, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 5000");
  });
  