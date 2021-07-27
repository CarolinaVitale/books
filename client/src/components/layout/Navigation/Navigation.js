import { Component } from 'react'
import { Link } from 'react-router-dom'

import UsersService from '../../../services/users.service'
import AuthService from '../../../services/auth.service'

import { Navbar, Nav, FormControl, Button, Form, Modal, } from 'react-bootstrap'

import RegisterForm from '../../pages/User/Register/RegisterForm'
import Login from '../../pages/User/Login/Login'

import logo from './logo.svg'


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
            .then(() => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }


    handleClose = () => { this.setState({ show: false }) }
    handleShow = () => { this.setState({ show: true }) }

    render() {

        const { loggedUser, storeUser, history } = this.props

        return (
            <Navbar className='navbar' bg="light" variant="light" expand="md">
                <Navbar.Brand href="/"><img class='logo' src={logo}></img><button className='brand'>forWords</button></Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                
                        {!loggedUser
                            ?
                            <>
                                <>
                                    {<button className='navbar-button' onClick={() => this.setState({ modal: true, registerShown: true })}>Register</button>}
                                    {<button className='navbar-button' onClick={() => this.setState({ modal: true, registerShown: false })}>Login</button>}

                                    <Modal
                                        backdrop="static"
                                        keyboard={false}
                                        size='lg' show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                        <Modal.Header closeButton></Modal.Header>
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
                                <button className='search-button' variant="outline-success">Search</button>

                                <button className='navbar-button'><Link className="navbar-link" to="/profile"> {loggedUser ? loggedUser.firstName : ''}</Link></button>
                                <button className='navbar-button'><span className="navbar-link" onClick={this.logout}>Logout</span></button>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

export default Navigation