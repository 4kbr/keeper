const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
    {
    nik:String,
    nama:String,
    foto:String,
    },{timestamps:true}
);

module.exports = mongoose.model("Table",tableSchema);