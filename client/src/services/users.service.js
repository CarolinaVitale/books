import axios from 'axios'


class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    users = () => this.app.get('/users')
    profile = data => this.app.get('/profile', data)
    othersProfile = () => this.app.get('/profile/:user_id') 
    editProfile = () => this.app.put('/profile')
    deleteProfile = () => this.app.delete('/profile')
    signup = (email, password) => this.app.post('/register', { email, password })
    login = (email, password) => this.app.post('/login', { email, password })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
    followUnfollow = (follow_id, follow) => this.app.put('/profile/:user_id', { follow_id, follow })
}


export default UserService