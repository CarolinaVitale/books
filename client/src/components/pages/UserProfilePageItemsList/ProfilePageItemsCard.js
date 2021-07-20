import { Col, Card } from "react-bootstrap"

const ProfilePageItemsListCard = ({ email, firstName, lastName, cover, image, bio, _id }) => {

    return (
        <Col md={2}>
            <Card className="User-List-Card">
                <Card.Img variant="top" src={cover} alt={firstName + 'profile image'} />
                <Card.Body>
                    <h6 className="text">{firstName} {lastName}</h6>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProfilePageItemsListCard