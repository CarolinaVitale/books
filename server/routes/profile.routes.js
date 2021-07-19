const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')
const Book = require('./../models/Book.model')
const Post = require('./../models/Post.model')


const bcrypt = require("bcrypt")
const bcryptSalt = 10

const { sessionActive, currentUser, randomToken, emails } = require('./../utils')
const { rejectUser } = require('./../middleware')
const transporter = require('./../config/nodemailer.config')




// USER -- SIGNUP
router.post('/register', (req, res) => {

    const { email, password, firstName, lastName, bio, role, friend } = req.body
    const address = { road, number, city, state } = req.body

    const tokenConfirmation = randomToken()
    const objectEmail = { email, tokenConfirmation }
    const emailToSend = emails('email', objectEmail)

    transporter
        .sendMail(emailToSend)
        .then(info => console.log(info))
        .catch(err => console.log(err))

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    User
        .create({ email, password: hashPass, firstName, lastName, bio, tokenConfirmation, role, friend, address })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})



// EMAIL'S CONFIRMATION
router.get('/confirmation/email/:token', (req, res) => {

    const { token } = req.params

    User.find({ tokenConfirmation: token })
        .then(user => {

            if (user.length) {

                User.findByIdAndUpdate(user[0]._id, { role: 'USER' }, { new: true })
                    .then(() => res.redirect('/'))
                    .catch(err => console.log(err))

            } else {

                res.render('errors/errorEmail')
            }
        })
        .catch(err => console.log(err))
})


//LOGIN -- (API)
router.post('/login', (req, res) => {

    const { email, password } = req.body

    User
        .findOne({ email })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'Username not registered' })
                return
            }

            if (!bcrypt.compareSync(password, user.password)) {
                res.status(401).json({ code: 401, message: 'Incorrect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })

        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})



// PROFILE
router.get('/profile', rejectUser('PENDING'), (req, res) => {

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        const id = loggedUser._id

        const promiseUser = User.findById(id)
        const promiseBooks = Book.find({owner: id})
            ?.populate('review')
        const promisePosts = Post.find({ owner: id })
            ?.populate('review')

        Promise.all([ promiseUser, promiseBooks, promisePosts ])
            .then(profile => res.json(profile))
            .catch(err => res.status(500).json({ code: 500, message: 'Profile Error', err }))
    } else {
        res.redirect('/')
    }
})



//EDIT PROFILE
//protegido, sólo CURRENTUSER
router.put('/profile/edit', rejectUser('PENDING'), (req, res) => {

    const { email, firstName, lastName, bio, tokenConfirmation, role, friend } = req.body
    const address = { road, number, city, state } = req.body

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        const id = loggedUser._id

        User
            .findByIdAndUpdate(id, { email, firstName, lastName, bio, tokenConfirmation, role, friend, address }, { new: true })
            .then(user => res.json(user))
            .catch(err => res.status(500).json({ code: 500, message: 'Edit profile Error', err }))
    } else {
        res.redirect('/')
    }
})



// //DELETE
//protegido, sólo CURRENTUSER
router.delete('/profile/delete', rejectUser('PENDING'), (req, res) => {

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        const id = loggedUser._id

        User
            .findByIdAndDelete(id)
            .then(() => res.json())
            .catch(err => res.status(500).json({ code: 500, message: 'Delete profile Error', err }))
    } else {
        res.redirect('/')
    }
})



module.exports = router