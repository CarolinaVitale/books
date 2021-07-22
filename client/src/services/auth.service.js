import axios from 'axios'


class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    signup = (data) => this.app.post('/register', data)
    login = (email, password) => this.app.post('/login', { email, password })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}


export default AuthService