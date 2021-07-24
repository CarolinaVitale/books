import { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import UserService from '../../../services/users.service'
import ProfileCard from './ProfileCard'


class FriendsProfile extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined,
        }
        this.userService = new UserService()
    }


    loadUser = () => {
        this.userService
            .users()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadUser()
    }
    //props.match es lo del /:id

    render() {
        return (
            !this.state.users
                ? <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                :
                (
                    <>
                        {this.state.users.map(elm => elm._id !== this.props.loggedUser._id ? <ProfileCard key={elm._id} {...elm} /> : null)}
                        {/* ves a todos los amigos menos a ti */}
                    </>
                )
        )
    }

}


export default FriendsProfile