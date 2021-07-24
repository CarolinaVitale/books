const express = require('express')
const router = express.Router()

const Post = require('./../models/Post.model')




//CREATE POST 
router.post('/create', (req, res) => {

        const loggedUser = req.session.currentUser
        const id = loggedUser._id

        const { title, text } = req.body

        Post
            .create({ title, text, owner: id })
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not create post', err }))
  
})



//GET POST LIST
router.get('/list', (req, res) => {

    Post
        .find()
        .populate('owner reviews')
        .then(post => res.json(post))
        .catch(err => res.status(500).json({ code: 500, message: 'Post list not found', err }))
})




//READ POST 

router.get('/details/:post_id', (req, res) => {

        const { post_id } = req.params
    
        Post
            .findById(post_id)
            .populate('owner reviews')
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Post details not found', err }))
})



//EDIT POST 
//hay que cambiar la logica
router.put('/:post_id', (req, res) => {

        const { post_id } = req.params
        const { title, text } = req.body

        Post
            .findByIdAndUpdate(post_id, { title, text }, { new: true })
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not edit post', err }))
})



//DELETE POST 
//hay que cambiar la logica
router.delete('/:post_id', (req, res) => {

        const { post_id } = req.params

        Post
            .findByIdAndDelete(post_id)
            .then(post => res.json(post))
            .catch(err => res.status(500).json({ code: 500, message: 'Could not delete post', err }))
})



module.exports = router