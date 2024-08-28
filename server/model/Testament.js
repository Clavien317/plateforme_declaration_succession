const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    declarationID:{type: String,required: true},
    detail:{type: String,required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Testament", schema)