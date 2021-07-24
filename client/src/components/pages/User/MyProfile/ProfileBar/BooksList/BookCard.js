import { Col, Card, Image } from "react-bootstrap"

const BookCard = ({ image, title, description, price, currency }) => {

    return (
        <Col md={3}>
            <div className="friend-card">
                <Image variant="top" src={image} alt={title + 'profile image'} roundedCircle />
                <Card.Body>
                    <h6 className="text">{title}</h6>
                    <p>{description}</p>
                    <p>{price}{currency}</p>
                </Card.Body>
            </div>
        </Col>
    )
}

export default BookCard