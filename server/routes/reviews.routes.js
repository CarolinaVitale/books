const express = require('express')
const router = express.Router()

const Review = require('./../models/Review.model')
const Book = require('./../models/Book.model')
const Post = require('./../models/Post.model')

const { response } = require('express')



//CREATE REVIEW
router.post('/create', (req, res) => {

    const loggedUser = req.session.currentUser
    const id = loggedUser._id

    const { title, text, points, price, file_id } = req.body

    Review
        .create({ title, text, points, owner: id })
        .then(response => {

            const ModelChosen = !price ? Post : Book
          
            return ModelChosen
                .findByIdAndUpdate(file_id, { $push: { review: response._id } }, { new: true })
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Could not create review', err }))
})



//READ REVIEW 
router.get('/details/:review_id', (req, res) => {

    const { review_id } = req.params

    Review
        .findById(review_id)
        .then(review => res.json(review))
        .catch(err => res.status(500).json({ code: 500, message: 'Review details not found', err }))
})



//EDIT REVIEW
//hay que cambiar la logica
router.put('/:review_id', (req, res) => {

    const { review_id } = req.params
    const { title, text, points } = req.body

    Review
        .findByIdAndUpdate(review_id, { title, text, points }, { new: true })
        .then(review => res.json(review))
        .catch(err => res.status(500).json({ code: 500, message: 'Could not edit review', err }))
})



//DELETE REVIEW
//hay que cambiar la logica
router.delete('/:review_id', (req, res) => {

    const { review_id } = req.params

    Review
        .findByIdAndDelete(review_id)
        .then(review => res.json(review))
        .catch(err => res.status(500).json({ code: 500, message: 'Could not delete review', err }))
})



module.exports = router