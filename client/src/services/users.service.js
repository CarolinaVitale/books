import axios from 'axios'


class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getUsers = () => this.app.get('/get-users')
    profile = () => this.app.get('/profile')
    login = (email, password) => this.app.post('/login', { email, password })
    signup = (email, password) => this.app.post('/register', { email, password })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}


export default UserService