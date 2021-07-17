const { Schema, model } = require("mongoose")

const reviewSchema = new Schema({

    title: {
        type: String,
        //require: true
    },
    text: {
        type: String,
        //require: true
    },
    points: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},
    {
        timestamp: true,
    })

const Review = model("Review", reviewSchema)


module.exports = Review
