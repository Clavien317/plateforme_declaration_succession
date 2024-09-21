const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    testamentID:{type: String,required: true},
    nom:{type: String,required: true},
    datenaiss:{type: String,required: true},
    relation:{type: String,required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Heritier", schema)