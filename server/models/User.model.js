const { Schema, model } = require("mongoose")

const userSchema = new Schema({

  email: {
    type: String,
    //require: true,
    //unique: true
  },
  password: {
    type: String,
    //require: true
  },
  firstName: {
    type: String,
    //require: true
  },
  lastName: {
    type: String,
    //require: true
  },
  img: {
    type: String,
    default: 'https://res.cloudinary.com/carolinavitale/image/upload/v1626707612/mint-heart_xpwvnc.jpg'
  },
  cover: {
    type: String,
    default: 'https://res.cloudinary.com/carolinavitale/image/upload/v1626707011/purple_qafsfl.jpg'
  },
  bio: String,
  tokenConfirmation: String,
  role: {
    type: String,
    enum: ['USER', 'PENDING', 'ADMIN'],
    default: 'PENDING'
  },
  address: {
    road: String,
    number: Number,
    city: String,
    state: String,
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],

}, {
  timestamp: true,
})

const User = model("User", userSchema)

module.exports = User
