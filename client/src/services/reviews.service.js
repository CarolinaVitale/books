import axios from 'axios'


class ReviewService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/review',
            withCredentials: true
        })
    }

    reviewCreate = data => this.app.post('/create', data)
    reviewDetails = review_id => this.app.get(`/details/${review_id}`)
    reviewEdit = (data, review_id) => this.app.put(`/${review_id}`, data)
    reviewDelete = review_id => this.app.delete(`/${review_id}`)
}


export default ReviewService