import { Col, Card, Image } from "react-bootstrap"

const FriendCard = ({ email, firstName, lastName, cover, image, bio, _id }) => {

    return (
        <Col md={3}>
            <div className="friend-card">
                <Image variant="top" src={cover} alt={firstName + 'profile image'} roundedCircle />
                <Card.Body>
                    <h6 className="text">{firstName} {lastName}</h6>
                </Card.Body>
            </div>
        </Col>
    )
}

export default FriendCard