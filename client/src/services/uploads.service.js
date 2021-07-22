import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/upload',
            withCredentials: true
        })
    }

    uploadImage = image => this.app.post('/image', image)
}

export default UploadsService