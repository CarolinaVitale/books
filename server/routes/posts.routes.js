const express = require('express')
const router = express.Router()

const Post = require('./../models/Post.model')

const { sessionActive, currentUser } = require('./../utils')



//CREATE POST 
router.post('/create', (req, res) => {

    if (sessionActive(req)) {

        const loggedUser = currentUser(req)
        const id = loggedUser._id

        const { title, text } = req.body

        Post
            .create({ title, text, owner: id })
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not create post', err }))
    }
})



//READ POST 
router.get('/details/:post_id', (req, res) => {

    if (sessionActive(req)) {

        const { post_id } = req.params

        Post
            .findById(post_id)
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Post details not found', err }))
    }
})



//EDIT POST 
//hay que cambiar la logica
router.put('/edit/:post_id', (req, res) => {

    if (sessionActive(req)) {

        const { post_id } = req.params
        const { title, text } = req.body

        Post
            .findByIdAndUpdate(post_id, { title, text }, { new: true })
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not edit post', err }))
    }
})



//DELETE POST 
//hay que cambiar la logica
router.delete('/delete/:post_id', (req, res) => {

    if (sessionActive(req)) {

        const { post_id } = req.params

        Post
            .findByIdAndDelete(post_id)
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not delete post', err }))
    }
})



module.exports = router