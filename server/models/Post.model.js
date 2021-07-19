const { Schema, model } = require("mongoose")

const postSchema = new Schema({

    title: String,
    text: String, //investigar PÁRRAFOS!
    img: {
        type: String,
        //default: link cloudinary
    },
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},
    {
        timestamp: true,
    })

const Post = model("Post", postSchema)

module.exports = Post
