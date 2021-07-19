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
    //default:
  },
  cover: {
    type: String,
    //default:
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
  friend: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

}, {
  timestamp: true,
})

const User = model("User", userSchema)

module.exports = User
