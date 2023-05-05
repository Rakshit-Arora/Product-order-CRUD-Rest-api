const express = require('express')
const Product = require('../Models/product')
const router = new express.Router()
//Create Product
router.post("/product/new", async(req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true, 
        product
    })
})

//Get Products
router.get("/products", async(req, res) => {
    const products = await Product.find();

    res.status(201).json({
        success: true, 
        products
    })
})

//Get Single Product

router.get("/product/:id", async(req, res) => {
    const products = await Product.findById(req.params.id);

    res.status(201).json({
        success: true, 
        products
    })
})

//Update Product
router.patch("/product/:id", async(req, res) => {
    let product = await Product.findById(req.params.id);

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        useFindAndModify: false,
        runValidators: true
    })

    res.status(201).json({
        success: true, 
        product
    })
})

// Delete Product
router.delete("/product/:id", async(req, res) => {
    let product = await Product.findById(req.params.id)

    if(!product)
    {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndDelete(req.params.id, req.body)
 
    res.status(201).json({
        success: true, 
        message: "Product is Deleted"
    })
})

module.exports = router