import { Col, Card } from "react-bootstrap"

const ItemsCard = ({ email, firstName, lastName, cover, image, bio, _id }) => {

    return (
        <Col sm={2}>
            <div className="User-List-Card">
                <Card.Img variant="top" src={cover} alt={firstName + 'profile image'} />
                <Card.Body>
                    <h6 className="text">{firstName} {lastName}</h6>
                </Card.Body>
            </div>
        </Col>
    )
}

export default ItemsCard