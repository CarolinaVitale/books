import { Col, Card } from "react-bootstrap"

const ProfilePageItemsListCard = ({ email, firstName, lastName, cover, image, bio, _id }) => {
    
    return (
        <Col md={2}>
            <Card className="User-List-Card ">
                <Card.Img variant="top" src={cover} alt={firstName + 'profile image'} />
                <Card.Body className="border-ligth">
                    <Card.Title className="text-truncate">{firstName}{lastName}</Card.Title>
                    <Card.Text className="text-truncate">
                        {bio}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProfilePageItemsListCard