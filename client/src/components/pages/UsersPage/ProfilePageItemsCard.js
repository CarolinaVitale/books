import { Col, Card } from "react-bootstrap"

const ProfilePageItemsListCard = ({ email, firstName, lastName, cover, image, bio, _id }) => {
    
    return (
        <Col>
            <Card className="user-card">
                <Card.Body>
                    <Card.Title>{firstName} {lastName}</Card.Title>
                    <p>User: {email} </p>
                    <img src={cover} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProfilePageItemsListCard