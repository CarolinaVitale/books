import axios from 'axios'


class PostService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/post',
            withCredentials: true
        })
    }

    postCreate = () => this.app.post('/create')
    postList = () => this.app.get('/list')
    postDetails = post_id => this.app.get(`/details/${post_id}`)
    postEdit = () => this.app.put('/:post_id')
    postDelete = () => this.app.delete('/:post_id')
}



export default PostService
