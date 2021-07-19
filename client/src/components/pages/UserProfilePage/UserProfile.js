import { Component } from 'react'
import UserService from './../../../services/users.service'
import UserProfileCard from './UserProfilePage'


class UserProfile extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined,
        }
        this.userService = new UserService()
    }


    loadUser = () => {
        this.userService
            .getUsers()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadUser()
    }


    render() {
        return (
            !this.state.users
                ? <h3>Cargando...</h3>
                :
                (
                    <>
                        {this.state.users.map(elm => <UserProfileCard key={elm._id} {...elm} />)}
                    </>
                )
        )
    }

}


export default UserProfile