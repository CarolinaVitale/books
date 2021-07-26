import { Col, Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const BookCard = ({ image, title, description, price, currency, _id }) => {

    return (
        <Col lg={2}>
            <div className="friend-card">
                <Link to={'/book/details/' + _id} ><Image className='card-image' variant="top" src={image} alt={title + 'profile image'} /></Link>
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