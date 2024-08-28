const mongoose = require("../utils/db")
// id defunt

const schema = new mongoose.Schema({
    nom:{type: String,required: true},
    datenaiss:{type: String,required: true},
    datedece:{type: String,required: true},
    declarationID:{type: String,required: false},
},
{ timestamps: true })


module.exports = mongoose.model("Identite", schema)