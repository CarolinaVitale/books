import { Nav, NavLink, Row, Col } from 'react-bootstrap'


// import logo from './logo.svg';

const Navbar = () => {
    return (

        <>
            <Row className="justify-content-center">
                <Col md={{ span: 4, offset: 2 }}>
                    <Nav className="navbar-profile">
                        <NavLink to="/">Users</NavLink>
                        <NavLink to="#link">Books</NavLink>
                        <NavLink to="#link">Post</NavLink>
                    </Nav>
                </Col>
            </Row>
        </>



    )
}

export default Navbar