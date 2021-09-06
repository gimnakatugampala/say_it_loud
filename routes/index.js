const express = require('express')
const router = express.Router()

// @desc All Posts
// @route GET /posts
router.get('/',(req,res) =>{
    res.render('post/index')

})

// @desc  Posts Create
// @route GET /posts/create
router.get('/create',(req,res) =>{
    res.send('post/create')

})

// // @desc  Single Post
// // @route GET /posts/:id
// router.get('/:id',(req,res) =>{
//     res.send('post/create')

// })

module.exports = router