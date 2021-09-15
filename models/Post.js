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
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    status:{
        type:String,
        default:'public',
        enum:['public','private']

    },
    likes:{

    },
    createdAt:{
        type:Date,
        default: Date.now

    }


})


module.exports = mongoose.model('Post',PostSchema)