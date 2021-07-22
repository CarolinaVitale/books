import axios from 'axios'


class UnSplashApiService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/',
            withCredentials: true
        })
    }


    getUnsplash = () => this.app.get('/api/unsplash')

}


export default UnSplashApiService