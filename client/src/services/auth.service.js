import axios from 'axios'


class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    signup = (email, password, firstName, lastName, image, cover, bio, road, apartment, city, state) => this.app.post('/register', { email, password, firstName, lastName, image, cover, bio, road, apartment, city, state })
    login = (email, password) => this.app.post('/login', { email, password })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}


export default AuthService