import { Col, Card } from "react-bootstrap"

const UserListCard = ({ email, firstName, lastName, cover, image, _id }) => {
    
    return (
        <Col md={4}>
            <Card className="user-card">
                <Card.Body>
                    <Card.Title>{firstName} {lastName}</Card.Title>
                    <p>User: {email} </p>
                    <img src={cover} alt={firstName + 'cover-img'}/>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserListCard