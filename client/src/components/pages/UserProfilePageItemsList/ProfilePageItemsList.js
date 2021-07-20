import { Component } from 'react'
import { Row, Container } from "react-bootstrap"

import UserService from '../../../services/users.service'
import ProfilePageItemsListCard from './ProfilePageItemsCard'


class ProfilePageItemsList extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined,
            modal: false
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
                        <Container>
                            <Row>
                                {this.state.users.map((elm, modal) => <ProfilePageItemsListCard key={elm._id} {...elm} />)}
                            </Row>
                        </Container>
                    </>
                )
        )
    }

}


export default ProfilePageItemsList