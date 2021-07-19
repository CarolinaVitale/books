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
        min: 1,
        max: 5
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
