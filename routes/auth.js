const express = require('express')
const router = express.Router()

// @desc Login Page
// @route GET /
router.get('/',(req,res) =>{
    res.render('auth/signin')

})

// @desc SignUp
// @route GET /signup
router.get('/signup',(req,res) =>{
    res.render('auth/signup')

})

module.exports = router