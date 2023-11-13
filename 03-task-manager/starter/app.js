const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const cennectDB = require('./db/connect')
require('dotenv').config()
// const mongoose = require('mongoose')

// json middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

const start = async () => {
     try {
          await cennectDB(process.env.MONGO_URL)
          app.listen(5000, console.log('Server started on port 5000...'))
     } catch (error) {
          console.log(error)
     }
}

start()
