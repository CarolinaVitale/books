import { Col, Card } from "react-bootstrap"

const UserListCard = ({ email, firstName, lastName, _id }) => {
    return (

        <Col md={4}>
            <Card className="user-card">
                <Card.Body>
                    <Card.Title>{firstName} {lastName}</Card.Title>
                    <p>User: {email} </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserListCard