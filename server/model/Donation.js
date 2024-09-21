const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    nom_biens:{type: String,required: true},
    montant:{type: String,required: true},
    beneficiaire:{type: String,required: true},
    description:{type: String,required: false},
    declarationID:{type: String,required: false},
},
{ timestamps: true })


module.exports = mongoose.model("Donation", schema)