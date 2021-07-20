import { Nav, NavLink, NavDropdown, Container } from 'react-bootstrap'

// import logo from './logo.svg';

const Navbar = () => {
    return (

        <>
            <div className="nav-navigation">

                {/* <Container> */}
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="me-auto">
                    <NavLink to="/">Users</NavLink>
                    <NavLink to="#link">Books</NavLink>
                    <NavLink to="#link">Post</NavLink>
                    <NavLink to="#link">Reviews</NavLink>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Log In</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">My profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Disconnnect</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* </Navbar.Collapse> */}
                {/* </Container> */}


            </div>
        </>
        // <>
        //     <div className="nav">
        //         <Nav>
        //             <NavLink to="/">Users</NavLink>
        //             <NavLink to="books">Books</NavLink>
        //             <NavLink to="reviews">Reviews</NavLink>
        //             <NavLink to="posts">Posts</NavLink>
        //         </Nav>
        //     </div>
        // </>



    )
}

export default Navbar