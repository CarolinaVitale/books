import { Component } from 'react'
import { Link } from 'react-router-dom'

import UsersService from '../../../services/users.service'
import AuthService from '../../../services/auth.service'

import { Navbar, Nav, FormControl, Button, Form, Modal } from 'react-bootstrap'

import RegisterForm from '../../pages/Register/RegisterForm'
import Login from '../../pages/Login/Login'



class Navigation extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined,
            modal: false
        }
        this.usersService = new UsersService()
        this.authService = new AuthService()
    }

    logout = () => {
        this.authService
            .logout()
            .then(()=> this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {

        const { loggedUser, storeUser, history } = this.props

        return (
            <Navbar className='navbar' bg="light" variant="light" expand="md">
                <Navbar.Brand href="/">BooksApp</Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        {!loggedUser
                            ?
                            <>
                                <>
                                    {<button className='navbar-button' onClick={() => this.setState({ modal: true, registerShown: true })}>Register</button>}
                                    {<button className='navbar-button' onClick={() => this.setState({ modal: true, registerShown: false })}>Login</button>}

                                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                        <Modal.Body>
                                            {this.state.registerShown
                                                ? <RegisterForm history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />
                                                : <Login history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />}
                                        </Modal.Body>
                                    </Modal>
                                </>
                            </>
                            :
                            <>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="search"
                                    aria-label="Search"
                                />
                                <Button className='search-button' variant="outline-success">Search</Button>

                                <Link className="nav-link" to="/profile"> {loggedUser ? loggedUser.firstName : ' '}</Link>
                                <span className="nav-link" onClick={this.logout}>Logout</span>
                                <Form className="d-flex"></Form>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

export default Navigation