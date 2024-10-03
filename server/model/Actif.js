const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    userId:{type: String,required: true},
    declarationId:{type: String,required: false},
    biens:{type: String,required: true},
    valeur:{type: Number,required: true},
    description:{type: String,required: true},
    dossierNum:{type: String,required: true},
    beneficiaire:{type: String,required: false},
},
{ timestamps: true })


module.exports = mongoose.model("Actif", schema)