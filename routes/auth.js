const express = require('express')
const router = express.Router()

// @desc Login Page
// @route GET /
router.get('/signin',(req,res) =>{
    res.render('auth/signin',{
        layout:'login'
    })

})

// @desc SignUp
// @route GET /signup
router.get('/signup',(req,res) =>{
    res.render('auth/signup',{
        layout:'login'
    })

})

module.exports = router