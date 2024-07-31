const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')

const app = express() //express syntax

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes attach
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' +route)))

//Server up
const server = () => {
   db()
   app.listen(PORT, () => {
    console.log('listening to port:', PORT)
   })
}

server()
