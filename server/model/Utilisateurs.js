
const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    nom:{type: String,required: true},
    email:{type: String,required: true},
    tel:{type: String,required: true},
    nif:{type: String,required: false},
    cin:{type: String,required: false},
    codeRecuperation:{type: String,required: false},
    role:{type: String,required: true},
    password:{type: String,required: false},
},
{ timestamps: true })


module.exports = mongoose.model("Utilisateur", schema)

