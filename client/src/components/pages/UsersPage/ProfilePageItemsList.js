import { Component } from 'react'
import { Row } from "react-bootstrap"

import UserService from '../../../services/users.service'
import ProfilePageItemsListCard from './ProfilePageItemsCard' 

import './UserListCard.css'
class ProfilePageItemsList extends Component {

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
                    <Row>
                        {this.state.users.map(elm => <ProfilePageItemsListCard key={elm._id} {...elm} />)}
                    </Row>
                    </>
                )
        )
    }

}


export default ProfilePageItemsList