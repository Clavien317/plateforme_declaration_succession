const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    dossierNum:{type: String,required: true},
    id_user:{type: String,required: true},
    titre:{type: String,required: true},
    nom_defunt:{type: String,required: true},
    naiss_defunt:{type: String,required: true},
    respo_defunt:{type: String,required: true},
    dece_defunt:{type: String,default:"Non preci",required: true},
    lien_defunt:{type: String,required: true},
    lega_cin:{type: String,required: true},
    description_test:{type: String,required: true},
    etat:{type: String,default:"En entente",required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Declaration", schema)