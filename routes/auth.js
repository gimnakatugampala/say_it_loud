const express = require('express')
const router = express.Router()

// @desc Login Page
// @route GET /
router.get('/',(req,res) =>{
    res.redirect('/posts')
})

// @desc Login Page
// @route GET /signin
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

// @desc Search 
// @route GET /search
router.get('/search',(req,res) =>{
    res.render('post/search')

})

module.exports = router