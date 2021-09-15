const express = require('express')
const router = express.Router()

const User = require('../models/User')
const {ensureAuth,ensureGuest}  = require('../middleware/auth')


// @desc All Posts
// @route GET /posts
router.get('/',ensureAuth,(req,res) =>{

    res.render('post/index')
})

// @desc  Posts Create
// @route GET /posts/create
router.get('/create',ensureAuth,(req,res) =>{
    res.render('post/create')

})


// @desc  All Posts
// @route GET /posts/all
router.get('/all',ensureAuth,(req,res) =>{
    res.render('post/all')

})

// @desc  All Hashtags
// @route GET /posts/hashtags
router.get('/hashtags',ensureAuth,(req,res) =>{
    res.render('post/hashtags')

})


// @desc  Single Post
// @route GET /posts/:id
router.get('/:id',ensureAuth,(req,res) =>{
    res.send('post/create')

})

module.exports = router