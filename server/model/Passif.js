const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    type:{type: String,required: true},
    valeur:{type: String,required: true},
    declarationID:{type: String,required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Passif", schema)