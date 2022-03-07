const express=require("express");

const app=express();

app.get("/books",logger,(req,res)=>{
res.send({ route: "/books"})
})

app.get("/libraries",logger,checkPermission("librarian"),(req,res)=>{
     
         res.send({ route: "/libraries", premission:`${req.name}` })
       
    })

    app.get("/authors",logger,checkPermission("author"),(req,res)=>{
        res.send({ route: "/authors", premission:`${req.name}` })
        })

        function logger(req,res,next)
        {
            console.log("path:",req.path)
            return next();
        }

        function checkPermission(role)
        {
            return function check(req,res,next)
            {
                if(role==="librarian"|| role==="author" )
                {   
                   
                    req.name=true;
                    return next();
                }
                else{
                    return res.send("Permission not allowed")
                }
            }
        }
app.listen(4000,()=>{
    console.log("listening port 4000")
})