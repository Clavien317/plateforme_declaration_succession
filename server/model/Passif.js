const mongoose = require("../utils/db")


const schema = new mongoose.Schema({
    declarationId:{type: String,required: true},
    dette:{type: String,required: true},
    detail_dette:{type: String,required: true},
    dossierNum:{type: String,required: true},
},
{ timestamps: true })


module.exports = mongoose.model("Passif", schema)