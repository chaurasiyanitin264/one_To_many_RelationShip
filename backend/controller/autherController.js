const AuthorModel= require("../models/autherModel");
const BookModel= require("../models/bookModel");
const DataSave=async(req,res)=>{
   const {auther,title,price}=req.body;
//    console.log(auther)
   try {
       const Auther=await AuthorModel.create({
        auther:auther
       })
    //    console.log(Auther)
    const Book=await BookModel.create({
        title:title,
        price:price,
        autherid:Auther._id
    })
    await AuthorModel.findByIdAndUpdate(Auther._id, { $push: { books: Book._id } });
   
    res.send("OK");
   } catch (error) {
    console.log(error)
   }
  
}
const DisplayData=async(req,res)=>{

const Data=await AuthorModel.find().populate("books");
res.send(Data)
// console.log(Data)
}

const AddMoreData=async(req,res)=>{
    // console.log(req.body);
   const {id, title, price }=req.body;
   const Book=await BookModel.create({
    title:title,
    price:price,
    autherid:id
   })
   await AuthorModel.findByIdAndUpdate(id, { $push: { books: Book._id } });
//    res.send("OK");
    res.send("0kk");
}

module.exports={
    DataSave,
    DisplayData,
    AddMoreData
}