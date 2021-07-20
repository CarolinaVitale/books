import axios from 'axios'


class ReviewService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/review',
            withCredentials: true
        })
    }

    reviewCreate = () => this.app.post('/create')
    reviewDetails = () => this.app.get('/details/:review_id')
    reviewEdit = () => this.app.put('/:review_id')
    reviewDelete = () => this.app.delete('/:review_id')
}


export default ReviewService