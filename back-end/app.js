const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

const mongoUri = 'mongodb+srv://ronisvlnn:24x4nCpCZUSFI21M@cluster0.qsmk4zv.mongodb.net/BudjettiApp?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const homeRouter = require('./routes/home')
const moneyRouter = require('./routes/money')

app.use(express.json())

//reitit
app.use('/', homeRouter)
app.use('/money', moneyRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})