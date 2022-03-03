const express =require("express");
const app = express();


app.get("/users", function (req,res){   //get is method and /users is route
    console.log("Hello user");
    res.send({name:"hello peter"})
})
app.get("/student", function (req,res){
    
    res.send({name:"hello student1"})
})
app.listen(5000,()=>{
    console.log( "listening on 5000");
})