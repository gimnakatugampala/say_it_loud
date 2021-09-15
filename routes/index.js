const express = require('express')
const router = express.Router()

const User = require('../models/User')
const {ensureAuth,ensureGuest}  = require('../middleware/auth')


// @desc All Posts
// @route GET /posts
router.get('/',ensureAuth,(req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId

    console.log(req.user)

    res.render('post/index',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId
    })
})

// @desc  Posts Create
// @route GET /posts/create
router.get('/create',ensureAuth,(req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId


    res.render('post/create',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId
    })

})


// @desc  All Posts
// @route GET /posts/all
router.get('/all',ensureAuth,(req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId


    res.render('post/all',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId
    })

})

// @desc  All Hashtags
// @route GET /posts/hashtags
router.get('/hashtags',ensureAuth,(req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId


    res.render('post/hashtags',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId
    })

})


// @desc  Single Post
// @route GET /posts/:id
router.get('/:id',ensureAuth,(req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId

    res.send('post/create',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId
    })

})

module.exports = router