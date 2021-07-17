const express = require('express')
const router = express.Router()

const Book = require('./../models/Book.model')

const { sessionActive, currentUser } = require('./../utils')



//CREATE BOOK 
router.post('/create', (req, res) => {

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        console.log(loggedUser)
        const id = loggedUser._id

        const { title, description, price, currency } = req.body

        Book
            .create({ title, description, price, currency, owner: id })
            .then(book => res.json(book))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not create book', err }))
    }
})



//READ BOOK 
router.get('/details/:book_id', (req, res) => {

    if (sessionActive(req)) {

        const { book_id } = req.params

        Book
            .findById(book_id)
            .then(book => res.json(book))
            .catch(err => res.status(500).json({ code: 500, message: 'Book details not found', err }))
    }
})



//EDIT BOOK 
router.put('/edit/:book_id', (req, res) => {

    if (sessionActive(req)) {

        const { book_id } = req.params
        const { title, description, price, currency } = req.body

        Book
            .findByIdAndUpdate(book_id, { title, description, price, currency }, { new: true })
            .then(book => res.json(book))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not edit book', err }))
    }
})



//DELETE BOOK 
router.delete('/delete/:book_id', (req, res) => {

    if (sessionActive(req)) {

        const { book_id } = req.params

        Book
            .findByIdAndDelete(book_id)
            .then(book => res.json(book))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not delete book', err }))
    }
})



module.exports = router