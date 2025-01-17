const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema({
    title:String,
    price:Number,
    autherid:{
         type: mongoose.Schema.Types.ObjectId,
        ref:"auther"
    }
})
 
    
module.exports=mongoose.model("book",bookSchema);