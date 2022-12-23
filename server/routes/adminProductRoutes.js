const express = require('express');
const router = express.Router();
const Product = require("../models/product")


// Add product to database
router.post("/addproduct", async(req, res) => {
    const { formData } = req.body;

    try {
        const newProduct = await Product.create({
            category: formData.category,
            description: formData.description,
            imageName: formData.imageName,
            name: formData.name,
            price: formData.price,
            rating: formData.rating,
            tag: formData.tag
        })
        res.status(201).json({message: `Product with id ${newProduct._id} was successfully created!`})
        console.log("Product successfully created")
    } catch (error) {
        console.log(error)
        res.status(400).json({message: `Something went wrong please try again!`})
    }
})


// Delete product from database
router.post('/deleteproduct', async (req, res) => {

    const item = await Product.findById(req.body.item._id)

    if (item) {
        await Product.deleteOne(item)
        res.status(200).json({message: "The product was successfully deleted"})
    } else {
        res.status(404).json({message: "Something went wrong"})
    }
    
    
})

// Update product in database
router.post("/updateproduct", async(req, res) => {
    const {formData, _id}= req.body;
    
    const update = {
        category: formData.category,
        description: formData.description,
        imageName: formData.imageName,
        name: formData.name,
        price: formData.price,
        rating: formData.rating,
        tag: formData.tag
    }
    const id = {_id: _id}

    try {
        const updateProduct = await Product.findOneAndUpdate(id, update)

        res.status(201).json({message: `Product with id ${updateProduct._id} was successfully updated!`})
        console.log("Product successfully updated")
    } catch (error) {
        console.log(error)
        res.status(400).json({message: `Something went wrong please try again!`})
    }
})





module.exports = router