import axios from 'axios'


class BookService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/book',
            withCredentials: true
        })
    }

    bookCreate = data => this.app.post('/create', data)
    bookList = () => this.app.get('/list')
    bookDetails = book_id => this.app.get(`/details/${book_id}`)
    bookEdit = data => this.app.put('/:book_id', data)
    bookDelete = () => this.app.delete('/:book_id')
}



export default BookService