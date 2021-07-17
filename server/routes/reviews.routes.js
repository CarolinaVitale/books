const express = require('express')
const router = express.Router()

const Review = require('./../models/Review.model')

const { sessionActive, currentUser } = require('./../utils')



//CREATE REVIEW
router.post('/create', (req, res) => {

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        console.log(loggedUser)
        const id = loggedUser._id

        const { title, text, points } = req.body

        Review
            .create({ title, text, points, owner: id })
            .then(review => res.json(review))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not create review', err }))
    }
})



//READ REVIEW 
router.get('/details/:review_id', (req, res) => {

    if (sessionActive(req)) {

        const { review_id } = req.params

        Review
            .findById(review_id)
            .then(review => res.json(review))
            .catch(err => res.status(500).json({ code: 500, message: 'Review details not found', err }))
    }
})



//EDIT REVIEW
//hay que cambiar la logica
router.put('/edit/:review_id', (req, res) => {

    if (sessionActive(req)) {

        const { review_id } = req.params
        const { title, text, points } = req.body

        Review
            .findByIdAndUpdate(review_id, { title, text, points }, { new: true })
            .then(review => res.json(review))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not edit review', err }))
    }
})



//DELETE REVIEW
//hay que cambiar la logica
router.delete('/delete/:review_id', (req, res) => {

    if (sessionActive(req)) {

        const { review_id } = req.params

        Review
            .findByIdAndDelete(review_id)
            .then(review => res.json(review))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not delete review', err }))
    }
})



module.exports = router