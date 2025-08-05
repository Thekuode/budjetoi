require('dotenv').config();

const express = require('express')

const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')

const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err))

const homeRouter = require('./routes/home')
const moneyRouter = require('./routes/money')

app.use(express.json())

//reitit
app.use('/', homeRouter)
app.use('/money', moneyRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})