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
                        <Row className="justify-content-center">
                            <p onClick={() => this.setState({ modal: true })} >presshere to see modal that doesn't work in cards</p>
                            {this.state.users.map((elm, modal) => <ProfilePageItemsListCard onClick={() => this.setState({ modal: true })} key={elm._id} {...elm} />)}
                        </Row>

                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Header>
                                <Modal.Title>Preview</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <UserProfileCard refreshItems={this.loadUser} closeModal={() => this.setState({ modal: false })} />
                            </Modal.Body>
                        </Modal>
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