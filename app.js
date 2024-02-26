const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const admin = require('./routes/admin')
require('dotenv').config()

app.use(express.json())


app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


mongoose.Promisse = global.Promisse
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log(`mongo connected...`)
}).catch((err)=>{
    console.log(`erro de ${err}`)
})

app.use('/', admin)


app.listen(process.env.PORT_SERVER,()=>{
    console.log(`SERVER RUNNING ON PORT ${process.env.PORT_SERVER}`)
})
