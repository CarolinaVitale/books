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
    othersProfile = friend_id => this.app.get(`/profile/${friend_id}`) 
    editProfile = data => this.app.put('/profile', data)
    deleteProfile = () => this.app.delete('/profile')
    followUnfollow = (follow_id, follow) => this.app.put('/profile/:user_id', { follow_id, follow })
}


export default UserService