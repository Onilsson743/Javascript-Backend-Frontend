const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    }
});

module.exports = mongoose.model("User", userSchema);