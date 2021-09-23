const express = require('express')
const router = express.Router()
const passport =  require('passport')
const {ensureAuth,ensureGuest}  = require('../middleware/auth')

const Comment = require('../models/Comment')
const User = require('../models/User')
const Post = require('../models/Post')
const Twitter = require('twitter');


const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



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

  const userimg =  req.user.image
  const userfirstname =  req.user.firstName
  const userlastname =  req.user.lastName
  const id = req.user._id
  const displayname = req.user.displayName
  const googleId = req.user.googleId

  res.render('post/search',{
    userimg,
    userfirstname,
    userlastname,
    id,
    displayname,
    googleId
  })

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


   // @desc Comment
  // @route POST  /comments
  router.post('/comments',ensureAuth,async (req,res) =>{

    try{

      await Comment.create(req.body)

      res.redirect('/posts')

    }catch(err){

      console.log(err)

    }


      
      
  })

    // @desc Trending
  // @route GET  /trending
  router.get('/trending',ensureAuth,async (req,res) =>{

      const trends = await client.get('trends/place.json',{
        id:'1'
      })
      res.json(trends)
  })

   // @desc Profile
  // @route /profile/:id
  router.get('/profile/:id',ensureAuth,async (req,res) =>{

    const u = req.params.id

    const userdata = await User.findOne({firstName:u}).sort({createdAt: -1}).lean()

    const postdata = await Post.find({userId:userdata._id}).lean()

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId

    console.log(userdata)
    console.log(postdata)

    res.render('profile/profile',{
      userimg,
      userfirstname,
      userlastname,
      id,
      displayname,
      googleId,
      userdata,
      postdata
    })

  })



module.exports = router