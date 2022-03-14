const express =require("express");
const app = express();
app.use(express.json());

const userController=require("./controllers/user.controllers");
const fixedController=require("./controllers/fixed.controllers");
const masterController=require("./controllers/master.controllers");
const savingController=require("./controllers/saving.controllers");

app.use("/users",userController);
app.use("/master",masterController);
app.use("/fixed",fixedController);

app.use("/saving",savingController);

module.exports=app;