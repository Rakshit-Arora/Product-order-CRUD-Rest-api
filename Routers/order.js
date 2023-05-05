const express = require('express')
const Order = require('../Models/order')
const router = new express.Router()
//Create Order
router.post("/order/new", async(req, res) => {
    const order = await Order.create(req.body);

    res.status(201).json({
        success: true, 
        order
    })
})

//Get Order
router.get("/orders", async(req, res) => {
    const orders = await Order.find();

    res.status(201).json({
        success: true, 
        orders
    })
})

//Get Single Product

router.get("/order/:id", async(req, res) => {
    const order = await Order.findById(req.params.id);

    res.status(201).json({
        success: true, 
        order
    })
})

module.exports = router