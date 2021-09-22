const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const Comment = require('../models/Comment')
const {ensureAuth}  = require('../middleware/auth')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const path = require('path')
const fs = require('fs')

// @desc All Posts
// @route GET /posts
router.get('/',ensureAuth ,async (req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId

    let posts = await Post.find({}).sort({createdAt: -1}).lean()

    console.log(req.user)
    // console.log(posts)

    res.render('post/index',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId,
        posts
    })
})

// @desc  Posts Create - using post request
// @route POST /posts
router.post('/',ensureAuth,upload.single('avatar'),async (req,res) =>{
    // console.log(req.body)
    // console.log(req.file)
    try{
        const tempPath = req.file.path;
        const targetPath = path.join('./uploads',req.file.filename + req.file.originalname);

         fs.rename(tempPath,targetPath,err => {
         if(err) return res.redirect('/posts/create')

        res
        .status(200)
        .contentType("text/plain")
        .redirect('/posts')

    })
        const post = {
            userId:req.body.userid,
            userimage:req.body.userimage,
            title:req.body.title,
            body:req.body.body,
            image:req.file.filename + req.file.originalname,
            status:req.body.status,
            username: req.body.firstname.toLowerCase(),
            displayname:req.body.firstname + ' '+  req.body.lastname
    
        }

        // console.log(post)
        // Save dat
        await Post.create(post)
    }catch(err){
        console.log(err)
    }
   
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
router.get('/all',ensureAuth,async (req,res) =>{

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId

    let posts = await Post.find({}).lean()


    res.render('post/all',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId,
        posts
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
router.get('/:id',ensureAuth,async (req,res) =>{

    
    const comments = await Comment.find({
        postId:req.params.id
    }).lean()

    const single = await Post.findOne({
        _id:req.params.id
    }).lean()

    if(!single){
        return res.send('error')
    }

    if(!comments){
        return res.send('error')
    }


     //console.log(single)
    console.log(comments)

    const userimg =  req.user.image
    const userfirstname =  req.user.firstName
    const userlastname =  req.user.lastName
    const id = req.user._id
    const displayname = req.user.displayName
    const googleId = req.user.googleId

   
    

    res.render('post/single',{
        userimg,
        userfirstname,
        userlastname,
        id,
        displayname,
        googleId,
        single,
        comments
    })

})

// @desc Delete Post
//@ route POST /posts/:id
router.delete('/:id',ensureAuth,(req,res) =>{

    res.render('post/single')
    
})

module.exports = router