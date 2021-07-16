**/ INDEX /**
baseroute:'/'
router.get('/', (req, res) => res.json())


**/ USER /** 
**/ LOGIN (API)/**
api.get('/login', (req, res) => res.json(res)) 
    modal => render

api.post('/login' (req, res) => {

    User
        .findOne('username')
        .then(user => res.json(user))
})

**/ SIGNUP /**
api.get('/register', (req, res) => res.json(res))

api.post('/register', (req, res) => {
    
    User
        .create( { ... } )
        .then(() => redirect('/'))  
})
<!--  signup es un MODAL no cambia de página y depués 
del login te muestra los contenidos protegidos -->

**/ PROFILE /**
api.get('/profile', (req, res) => { 

    const id = req.session.currentUser.id
    
    User
        .findById(id)
        .populate('reviews, post, book')
        .then(user => res.json(user))
})

**/ EDIT PROFILE /**
<!-- modal con detalles del profile -->
<!-- protegido, sólo CURRENTUSER-->
api.get('/profile/details/edit', (req, res) => { 

    const id = req.session.currentUser.id
    
    User
        .findById(id)
        .populate('reviews, post, book')
        .then(user => res.json(user))
})

api.put('/profile/details/edit', (req, res) => { 

    User
        .findByIdAndUpdate()
})

**/ DELETE /**
<!-- protegido, sólo CURRENTUSER-->
api.delete('/user/delete/:id', (req, res) => {

    User
        .findByIdAndDelete()
        .then(() => res.json())
})


**/ BOOK /** 
**/ CREATE /**
api.get('/new-book', (req, res) => res.json(res))

api.post('/new-book', (req, res) => {

    Book
        .create({ ... })
        .then(() => redirect('/profile'))
})
<!-- sale en el profile del user y en el timeline -->

**/ READ/**
api.get('/book/details/:id', (req, res) => { 

    Book
        .findById()
})

**/ UPDATE /**
<!-- protegido, sólo OWNER Y ADMIN-->
api.get('/book/details/:id', (req, res) => {

    Book
        .findById()
})

<!-- carga el formulado (MODAL) con la info del book -->
api.put('/book/update/:id', (req, res) => {

    Book
        .findByIdAndUpdate()
})

**/ DELETE /**
<!-- protegido, sólo OWNER Y ADMIN-->
api.delete('/book/delete/:id', (req, res) => {

    Book
        .findByIdAndDelete()
        .then(() => res.json())
})