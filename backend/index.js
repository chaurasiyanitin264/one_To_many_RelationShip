const express=require("express");
const app=express();
const cors=require("cors");
const bodyparser=require("body-parser");
const AutherRoute=require("./routes/authorRoutes");
const mongoose=require("mongoose");

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/user",AutherRoute)

mongoose.connect("mongodb://127.0.0.1:27017/OneToManyRelationShip").then(()=>{
    console.log("DB Connected");
})
app.listen(8000,(req,res)=>{
    console.log("Server Run")
})