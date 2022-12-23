const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, getProductByTag } = require('../controller/productsControllers');


// Get all products from db /api/products
router.get('/', getAllProducts)


// Get a single product with id
router.get('/id/:id', getProductById)

// Get all products with same tag
router.get('/tag/:tag', getProductByTag)

module.exports = router