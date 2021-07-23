const express = require('express')
const router = express.Router()

const Book = require('./../models/Book.model')

const { currentUser } = require('./../utils')



//CREATE BOOK 
router.post('/create', (req, res) => {

    const loggedUser = currentUser(req)
    const id = loggedUser._id

    const { title, author, publisher, image, description, price, currency } = req.body

    Book
        .create({ title, author, publisher, image, description, price, currency, owner: id })
        .then(book => res.json(book))
        .catch(err => res.status(500).json({ code: 500, message: 'Could not create book', err }))
})



//GET BOOKS LIST
router.get('/list', (req, res) => {

    Book
        .find()
        .then(book => res.json(book))
        .catch(err => res.status(500).json({ code: 500, message: 'Book list not found', err }))
})



//READ BOOK 
router.get('/details/:book_id', (req, res) => {

    const { book_id } = req.params

    Book
        .findById(book_id)
        .then(book => res.json(book))
        .catch(err => res.status(500).json({ code: 500, message: 'Book details not found', err }))
})



//EDIT BOOK 
router.put('/:book_id', (req, res) => {

    const { book_id } = req.params
    const { title, description, price, currency } = req.body

    Book
        .findByIdAndUpdate(book_id, { title, description, price, currency }, { new: true })
        .then(book => res.json(book))
        .catch(err => res.status(500).json({ code: 500, message: 'Could not edit book', err }))
})



//DELETE BOOK 
router.delete('/:book_id', (req, res) => {

    const { book_id } = req.params

    Book
        .findByIdAndDelete(book_id)
        .then(book => res.json(book))
        .catch(err => res.status(500).json({ code: 500, message: 'Could not delete book', err }))
})



module.exports = router