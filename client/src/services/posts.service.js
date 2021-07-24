import axios from 'axios'


class PostService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/post',
            withCredentials: true
        })
    }

    postCreate = data => this.app.post('/create', data)
    postList = () => this.app.get('/list')
    postDetails = post_id => this.app.get(`/details/${post_id}`)
    postEdit = data => this.app.put('/:post_id', data)
    postDelete = () => this.app.delete('/:post_id')
}



export default PostService
