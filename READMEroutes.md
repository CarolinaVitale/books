/ INDEX /

baseroute:'/' router.get('/', (req, res) => res.json())

/ USER / / LOGIN (API)/

api.post('/login' (req, res) => {

User
    .findOne('username')
    .then(user => res.json(user))
})

/ SIGNUP /

api.post('/register', (req, res) => {

User
    .create( { ... } )
    .then(() => res.json(user))  
})

/ PROFILE /

api.get('/profile', (req, res) => {

const id = req.session.currentUser.id

User
    .findById(id)
    .populate('reviews, post, book')
    .then(() => res.json())
})

/ EDIT PROFILE /

api.put('/profile/details/edit', (req, res) => {

User
    .findByIdAndUpdate()
})

/ DELETE /

api.delete('/user/delete/:id', (req, res) => {

User
    .findByIdAndDelete()
    .then(() => res.json())
})

/ BOOK / / CREATE /

api.post('/new-book', (req, res) => {

Book
    .create({ ... })
    .then(() => redirect('/profile'))
})

/ READ /

api.get('/book/details/:id', (req, res) => {

Book
    .findById()
    .populate('reviews')
})

/ UPDATE /

api.get('/book/details/:id', (req, res) => {

Book
    .findById()
})

api.put('/book/update/:id', (req, res) => {

Book
    .findByIdAndUpdate()
})

/ DELETE /

api.delete('/book/delete/:id', (req, res) => {

Book
    .findByIdAndDelete()
    .then(() => res.json())
})

/ POST / / CREATE /

api.post('/new-post', (req, res) => {

Post
    .create({ ... })
    .then(() => res.json())
})

/ READ /

api.get('/post/details/:id', (req, res) => {

Post
    .findById()
    .populate('reviews')
})

/ UPDATE /

api.put('/post/update/:id', (req, res) => {

Post
    .findByIdAndUpdate()
})

/ DELETE /

api.delete('/post/delete/:id', (req, res) => {

Post
    .findByIdAndDelete()
    .then(() => res.json())
})

/ REVIEWS / /CREATE/

api.post(/book||post/details/review/:id', (req, res) => {

const userId = req,session.currentUser.id const bookId = { id } = req.params const { title, text, points } = req.body

Review
    .create({ owner : userId, book : bookId, title, text, points })
    .then( () => res.json())
})

/EDIT/

api.put('/book||post/details/review/edit/:id', (req, res) => {

const userId = req,session.currentUser.id const bookId = { id } = req.params const { title, text, points } = req.body

Review
    .findByIdAndUpdate({ owner : userId, book : bookId, title, text, points })
    .then( () => res.json())
/DELETE/

api.delete('/book||post/details/review/delete/:id', (req, res) => {

const { id } = req.params

Review
    .findByIdAndDelete(id)
    .then(() => res.json())
})