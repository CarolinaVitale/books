const express = require('express')
const router = express.Router()

const User = require('../models/User.model')
const Book = require('../models/Book.model')
const Post = require('../models/Post.model')

const { currentUser } = require('../utils')
const { rejectUser } = require('../middleware')



// PROFILE
router.get('/profile', (req, res) => {

    const loggedUser = currentUser(req)
    const id = loggedUser._id

    const promiseUser = User.findById(id)
        ?.populate('friends')
    const promiseBooks = Book.find({ owner: id })
        ?.populate('review')
    const promisePosts = Post.find({ owner: id })
        ?.populate('review')

    Promise
        .all([promiseUser, promiseBooks, promisePosts])
        .then(profile => res.json(profile))
        .catch(err => res.status(500).json({ code: 500, message: 'Profile Error', err }))
})



//USER LIST
router.get('/users', (req, res) => {

    User
        .find()
        .then(list => res.json(list))
        .catch(err => res.status(500).json({ code: 500, message: 'User-List Error!', err }))
})


//EDIT PROFILE
//protegido, sólo CURRENTUSER
router.put('/profile', rejectUser('PENDING'), (req, res) => {

    const { email, firstName, lastName, bio, tokenConfirmation, role, friend } = req.body
    const address = { road, number, city, state } = req.body

    const loggedUser = currentUser(req)
    const id = loggedUser._id

    User
        .findByIdAndUpdate(id, { email, firstName, lastName, bio, tokenConfirmation, role, friend, address }, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ code: 500, message: 'Edit profile Error', err }))
})



// //DELETE
//protegido, sólo CURRENTUSER
router.delete('/profile', rejectUser('PENDING'), (req, res) => {

    const loggedUser = currentUser(req)
    const id = loggedUser._id

    User
        .findByIdAndDelete(id)
        .then(() => res.json())
        .catch(err => res.status(500).json({ code: 500, message: 'Delete profile Error', err }))
})



module.exports = router