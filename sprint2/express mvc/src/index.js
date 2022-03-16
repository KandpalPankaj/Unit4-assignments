const express= require("express");
const app =express();
app.use(express.json());


const userController= require("./controllers/user.controllers");
const batchController= require("./controllers/batch.controllers");
const evaluationController= require("./controllers/evaluation.controllers");
const studentControllers= require("./controllers/student.controllers")
const submissionController= require("./controllers/submission.controllers");



app.use("/users",userController);
app.use("/batchs",batchController);
app.use("/evaluations",evaluationController);
app.use("/students",studentControllers);
app.use("/submissions",submissionController);












module.exports=app;

