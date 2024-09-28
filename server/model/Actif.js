const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    declarationId:{type: String,required: true},
    biens:{type: String,required: true},
    valeur:{type: String,required: true},
    description:{type: String,required: true},
    dossierNum:{type: String,required: true},
    beneficiaire:{type: String,required: false},
},
{ timestamps: true })


module.exports = mongoose.model("Actif", schema)