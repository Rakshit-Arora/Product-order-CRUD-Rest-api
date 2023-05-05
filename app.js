const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const productRouter = require('./Routers/product')
const orderRouter = require('./Routers/order')
const Order = require('./Models/order')
const Product = require('./Models/product')
const app = express()

// To Connect to MongoDb
mongoose.connect("mongodb://0.0.0.0:27017/sample", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected with mongodb")
}).catch((e) => {
    console.log(e)
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

// To Use Routers
app.use(productRouter)
app.use(orderRouter)

app.listen(4500, () => {
    console.log("server is working http://localhost:4500")
})