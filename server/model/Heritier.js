const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    declarationId:{type: String,required: true},
    userId:{type: String,required: true},
    dossierNum:{type: String,required: true},
    nom:{type: String,required: true},
    datenaiss:{type: String,required: true},
    relation:{type: String,required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Heritier", schema)