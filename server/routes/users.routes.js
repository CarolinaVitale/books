const express = require('express')
const router = express.Router()

const bcrypt = require("bcrypt")
const bcryptSalt = 10

const User = require('../models/User.model')
const Book = require('../models/Book.model')
const Post = require('../models/Post.model')

const { rejectUser } = require('../middleware')



//USER LIST
router.get('/users', (req, res) => {

    User
        .find()
        .then(list => res.json(list))
        .catch(err => res.status(500).json({ code: 500, message: 'User-List Error!', err }))
})



// PROFILE
router.get('/profile', (req, res) => {

    const loggedUser = req.session.currentUser
    const id = loggedUser._id

    const promiseUser = User.findById(id)
        .populate('friends')
    const promiseBooks = Book.find({ owner: id })
        .populate('review')
    const promisePosts = Post.find({ owner: id })
        .populate('review')

    Promise
        .all([promiseUser, promiseBooks, promisePosts])
        .then(profile => res.json(profile))
        .catch(err => res.status(500).json({ code: 500, message: 'Profile Error', err }))
})



//EDIT PROFILE
//protegido, sólo CURRENTUSER
router.put('/profile', rejectUser('PENDING'), (req, res) => {

    const { email, password, firstName, lastName, bio, tokenConfirmation, role, friend, image, cover } = req.body
    const {address} = req.body

    console.log(req.body)

    const loggedUser = req.session.currentUser
    const id = loggedUser._id

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    User
        .findByIdAndUpdate(id, { email, password: hashPass, firstName, lastName, bio, tokenConfirmation, role, friend, address, image, cover }, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ code: 500, message: 'Edit profile Error', err }))
})



// //DELETE
//protegido, sólo CURRENTUSER
router.delete('/profile', rejectUser('PENDING'), (req, res) => {

    const loggedUser = req.session.currentUser
    const id = loggedUser._id

    User
        .findByIdAndDelete(id)
        .then(() => res.json())
        .catch(err => res.status(500).json({ code: 500, message: 'Delete profile Error', err }))
})



module.exports = router