const express= require("express");
const app = express();

app.get("/home", function (req,res){   
    
    res.send("hello")
})
app.get("/books", function (req,res){
    
    res.send({book1:"Discovery of India",
    book2:"Great India",
    book3:"two states",
    book4:"War and peace"
})
})
app.listen(5000,()=>{
    console.log( "listening on 5000");
})