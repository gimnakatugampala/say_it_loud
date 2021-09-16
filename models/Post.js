const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
    },
    body:{
        type:String
    },
    displayname:{
        type:String
    },
    username:{
        type:String
    },
    userId:{
        type:String

    },
    status:{
        type:String,
        default:'public',
        enum:['public','private']

    },
    likeCount:{
        type:Number,
        default:0

    },
    userimage:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now

    }


})


module.exports = mongoose.model('Post',PostSchema)