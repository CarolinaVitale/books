import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'


const Navigation = ({ storeUser, loggedUser }) => {

    const authService = new AuthService()

    const logout = () => {
        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (

        <Navbar bg="light" variant="light" expand="md">
            <Navbar.Brand href="#home">BooksApp</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    {!loggedUser
                        ?
                        <>
                            <Link className="nav-link" to="/register">Register</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                        </>
                        :
                        <>
                            <Link className="nav-link" to="/profile">Profile</Link>
                            <span className="nav-link" onClick={logout}>Logout</span>
                        </>
                    }
                    <span className="nav-link"> {loggedUser ? loggedUser.username : ''}</span>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )  
}

export default Navigation