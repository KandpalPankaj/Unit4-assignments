const express = require("express");

const app = express();

app.get("/books",allBooks,(req,res)=>
{
    return res.send("Fetching all books")
})

app.get("/book/:name",allBooks,(req,res)=>
{
    return res.send("Fetching all books")
})

function allBooks(req,res,next)
{
    console.log("Fetching all books")
    next();
}
app.listen(5000,()=>{
    console.log("listening on port 5000");

})