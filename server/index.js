require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
const bodyParser = require("body-parser")
const utilisateur = require('./routes/user')



app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use("/api/v1/user",utilisateur)


app.listen(port, console.log(`serveur demarre sur http://localhost:${port}`))