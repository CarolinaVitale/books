import axios from 'axios'


class BookService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/book',
            withCredentials: true
        })
    }

    bookCreate = () => this.app.post('/create')
    bookList = () => this.app.get('/list')
    bookDetails = () => this.app.get('/details/:book_id')
    bookEdit = () => this.app.put('/:book_id')
    bookDelete = () => this.app.delete('/:book_id')
}


export default BookService