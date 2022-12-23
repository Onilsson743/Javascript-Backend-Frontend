const express = require('express')
const {body, validationResult} = require("express-validator")
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')


const router = express.Router()


// signup post
router.post(
 "/signup",
 body("email").isEmail().withMessage("The email is invalid"),
 body("password").isLength({ min: 5 }).withMessage("The password is too short"),
 async(req, res) =>{
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => {
            return {
                msg: error.msg
            }
        });
        return res.json({errors, data: null});
    }

    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (user) {
        return res.json({
            errors: [
                {
                    msg: "Email already in use",
                },
            ],
            data: null
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        email,
        password: hashedPassword
    });

    const token = await JWT.sign(
        {email: newUser.email},
        process.env.JWT_SECRET,
        {
            expiresIn: 100000
        }
    );

    res.json({
        errors: [],
        data: {
            token,
            user: {
                id: newUser._id,
                email: newUser.email
            }
        }
    })

   
});

// Signin post
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})

    if(!user) {
        return res.json({
            errors: [                
                {msg: "Invalid credentials"}
                
            ],
            data: null
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.json ({
            errors: [                
                {
                    msg: "Invalid credentials"
                }
                
            ],
            data: null
        })
    }

    const token = await JWT.sign(
        {email: user.email},
        process.env.JWT_SECRET,
        {
            expiresIn: 36000
        }
    );

    return res.json({
        errors: [],
        data: {
            token,
            user: {
                id: user._id,
                email: user.email
            }
        }
    })
})

module.exports = router;
