const express = require("express");

const app = express();

app.get("/books",singleBook,(req,res)=>
{
    return res.send("Fetching all books")
})

app.get("/book/:name",singleBook,(req,res)=>
{
    return res.send({bookName:req.nam})
})

function singleBook(req,res,next)
{
    console.log("Fetching all books")
    const{nam}=req.params;
    req.nam=nam
    next();
}
app.listen(5000,()=>{
    console.log("listening on port 5000");

})