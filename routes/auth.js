const express = require('express')
const router = express.Router()
const passport =  require('passport')


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

// @desc Google Auth
// @route GET /signin
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

// @desc Google Auth
// @route GET /signin
  router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/signin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router