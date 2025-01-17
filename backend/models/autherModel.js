const mongoose = require("mongoose");
const autherSchema = new mongoose.Schema({
    // auther: String,
    // books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }]
    auther:String,
    books:[{type:mongoose.Schema.Types.ObjectId,ref:"book"}]
})
module.exports = mongoose.model("auther", autherSchema);