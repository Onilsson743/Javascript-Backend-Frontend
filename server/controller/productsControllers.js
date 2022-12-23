const Product = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        console.log("products sent")
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

// Find with ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

// Find with tag name
const getProductByTag = async (req, res) => {
    try {
        const product = await Product.find({tag: req.params.tag})
        console.log(req.params.tag)
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = { getProductById, getAllProducts, getProductByTag }