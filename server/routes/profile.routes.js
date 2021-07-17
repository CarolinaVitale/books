const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')

const bcrypt = require("bcrypt")
const bcryptSalt = 10

const { sessionActive, currentUser } = require('./../utils')



// USER -- SIGNUP
router.post('/register', (req, res) => {

    const { email, password, firstName, lastName, bio, tokenConfirmation, role, friend } = req.body
    const address = { road, number, city, state } = req.body

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    User
        .create({ email, password: hashPass, firstName, lastName, bio, tokenConfirmation, role, friend, address })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
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
router.get('/profile', (req, res) => {

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        const id = loggedUser._id

        // const promiseUser = User.findById(id)
        // const promiseBooks = Book.findById(id)
        //     .populate('review')
        // const promisePosts = Post.findById(id)
        //     .populate('review')

        User
            .findById(id)
            .then(user => res.json(user))
            .catch(err => res.status(500).json({ code: 500, message: 'Profile Error', err }))
    } else {
        res.redirect('/')
    }
})


//EDIT PROFILE
//protegido, sólo CURRENTUSER
//hay que cambiar la logica
router.put('/profile/edit', (req, res) => {

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
//hay que cambiar la logica
router.delete('/profile/delete', (req, res) => {

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