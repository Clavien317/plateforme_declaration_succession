require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
const bodyParser = require("body-parser")
const utilisateur = require('./routes/user')
const Declaration = require('./routes/declaration')
const actif = require('./routes/actif')


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use("/api/v1/user",utilisateur)
app.use("/api/v1/declaration",Declaration)
app.use("/api/v1/actif",actif)



app.listen(port, console.log(`serveur demarre sur http://localhost:${port}`))