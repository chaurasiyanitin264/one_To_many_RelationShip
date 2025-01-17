const express=require("express");
const route=express.Router();
const AutherController=require("../controller/autherController");
route.post("/savedata",AutherController.DataSave);
route.get("/displaydata",AutherController.DisplayData);
route.post("/addmoreData",AutherController.AddMoreData)

module.exports=route;