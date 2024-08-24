const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    id_user:{type: String,required: true},
    titre:{type: String,required: true},
    detailsDonation:{type: String,required: true},
    Actif:{type: String,required: false},
    Passif:{type: String,required: false},
    affirmationSincerite:{type: String,required: true},
    dateSoumission:{type: String,required: false},
    etat:{type: String,required: false},
},
{ timestamps: true })


module.exports = mongoose.model("Utilisateur", schema)