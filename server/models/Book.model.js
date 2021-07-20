const { Schema, model } = require("mongoose")

const bookSchema = new Schema({

    title: {
        type: String,
        //require: true,
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/carolinavitale/image/upload/v1626707006/mint_y8b18a.jpg'
    },
    description: String,
    accepted: Boolean,
    price: Number,
    currency: String,
    review: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
    owner: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
}, {
    timestamp: true,
})

const Book = model("Book", bookSchema)


module.exports = Book
