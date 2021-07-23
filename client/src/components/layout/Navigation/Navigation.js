import { Navbar, Nav, FormControl, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import RegisterForm from '../../pages/Register/RegisterForm'


// class Navigation extends Component {

//     constructor() {
//         super()
//         this.state = {
//             users: undefined,
//             modal: false
//         }
//         this.usersService = new UsersService()
//     }


//     loadUsers = () => {
//         this.usersService
//             .users()
//             .then(response => this.setState({ users: response.data }))
//             .catch(err => console.log(err))
//     }


//     componentDidMount = () => {
//         this.loadUsers()
//     }


//     render() {




//     }
// }




const Navigation = ({ storeUser, loggedUser }) => {

    const authService = new AuthService()

    const logout = () => {
        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (

        <Navbar className='navbar' bg="light" variant="light" expand="md">
            <Navbar.Brand href="/">BooksApp</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    {!loggedUser
                        ?
                        <>
                            <Link className="nav-link" to="/register">Register</Link>
                            <Link className="nav-link" to="/login">Login

                                {/* <Button onClick={() => this.setState({ modal: true })}>Register</Button>
                                <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                    <Modal.Body>
                                        <RegisterForm refreshRegisterForm={this.loadUsers} closeModal={() => this.setState({ modal: false })} />
                                    </Modal.Body>
                                </Modal> */}
                            </Link>
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
                            <span className="nav-link" onClick={logout}>Logout</span>
                            <Form className="d-flex">

                            </Form>
                        </>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation