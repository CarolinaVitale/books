const { Schema, model } = require("mongoose")

const bookSchema = new Schema({

    title: {
        type: String,
        //require: true,
    },
    img: String,
    description: String,
    accepted: Boolean,
    price: Number,
    currency: String,
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamp: true,
})

const Book = model("Book", bookSchema)

module.exports = Book
