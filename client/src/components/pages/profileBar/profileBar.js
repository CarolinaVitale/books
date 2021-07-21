import { Nav, NavLink, Row, Col } from 'react-bootstrap'


const ProfileBar = () => {
    return (
        <>
            <Row>
                <Col className='profile-bar'>
                    <Nav>
                        <NavLink className='bar-link' to="/">Users</NavLink>
                        <NavLink to="#link">Books</NavLink>
                        <NavLink to="#link">Post</NavLink>
                    </Nav>
                </Col>
            </Row>
        </>
    )
}

export default ProfileBar