const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    imageName: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("product", productSchema)