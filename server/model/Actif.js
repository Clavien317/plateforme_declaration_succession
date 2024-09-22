const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    biens:{type: String,required: true},
    valeur:{type: String,required: true},
    description:{type: String,required: true},
    dossierNum:{type: String,required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Actif", schema)