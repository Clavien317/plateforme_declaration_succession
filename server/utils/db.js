
const mongoose = require("mongoose")
const url = process.env.MONGODB


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Base de données connectée!")
    })
    .catch((err) => {
        console.error("Erreur de connexion à la base de données:", err)
    })




module.exports = mongoose