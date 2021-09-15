const express = require('express')
const router = express.Router()
const passport =  require('passport')
const {ensureAuth,ensureGuest}  = require('../middleware/auth')


// @desc Login Page
// @route GET /
router.get('/',(req,res) =>{
    res.redirect('/posts')
})

// @desc Login Page
// @route GET /signin
router.get('/signin',ensureGuest,(req,res) =>{
    res.render('auth/signin',{
        layout:'login'
    })

})

// // @desc SignUp
// // @route GET /signup
// router.get('/signup',(req,res) =>{
//     res.render('auth/signup',{
//         layout:'login'
//     })

// })

// @desc Search 
// @route GET /search
router.get('/search',ensureAuth,(req,res) =>{
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

    console.log(req.user.id)

    // Successful authentication, redirect home.
    res.redirect('/');

  });

  // @desc Facebook Auth
// @route GET /signin
router.get('/auth/facebook',
  passport.authenticate('facebook'));

// @desc Facebook Auth
// @route GET /signin
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/signin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


    // @desc Logout
  // @route /auth/logout
  router.get('/logout',(req,res) =>{
    req.logout()
    res.redirect('/signin')
  })


module.exports = router