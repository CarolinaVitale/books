const express = require('express')
const router = express.Router()

const User = require('../models/User.model')
const Book = require('./../models/Book.model')
const Post = require('./../models/Post.model')

const { currentUser } = require('../utils')



// GET OTHERS PROFILE
router.get('/profile/:user_id', (req, res) => {

    const { user_id } = req.params

    const promiseUser = User.findById(user_id)
        ?.populate('friends')
    const promiseBooks = Book.find({ owner: user_id })
        ?.populate('review')
    const promisePosts = Post.find({ owner: user_id })
        ?.populate('review')

    Promise
        .all([promiseUser, promiseBooks, promisePosts])
        .then(profile => res.json(profile))
        .catch(err => res.status(500).json({ code: 500, message: 'Profile Error', err }))

})



// ADD FOLLOW
router.put('/profile/:user_id', (req, res) => {

    const { user_id } = req.params
    const { follow } = req.body

    User
        .findByIdAndUpdate(user_id, {$push:{ friends: follow }})
        .then(profile => res.json(profile))
        .catch(err => res.status(500).json({ code: 500, message: 'Follow Error', err }))

})



// REMOVE FOLLOW
router.put('/profile/:user_id', (req, res) => {

    const { user_id } = req.params
    const { unfollow } = req.body

    User
        .findByIdAndUpdate(user_id, { $pull: { friends: unfollow } })
        .then(profile => res.json(profile))
        .catch(err => res.status(500).json({ code: 500, message: 'Unfollow Error', err }))

})



module.exports = router