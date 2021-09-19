const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    postId:{
        type:String,
    },
    userId:{
        type:String,
    },
    displayName:{
        type:String,
        required:true
    },
    userImage:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Comment',CommentSchema)