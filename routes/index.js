const express = require('express')
const router = express.Router()

const User = require('../models/User')

// @desc All Posts
// @route GET /posts
router.get('/',(req,res) =>{

    res.render('post/index')

    console.log(req.user)
    console.log(req.body.user)

})

// @desc  Posts Create
// @route GET /posts/create
router.get('/create',(req,res) =>{
    res.render('post/create')

})

// @desc  All Posts
// @route GET /posts/all
router.get('/all',(req,res) =>{
    res.render('post/all')

})

// @desc  All Hashtags
// @route GET /posts/hashtags
router.get('/hashtags',(req,res) =>{
    res.render('post/hashtags')

})


// @desc  Single Post
// @route GET /posts/:id
router.get('/:id',(req,res) =>{
    res.send('post/create')

})

module.exports = router