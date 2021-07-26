import { Col, Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const BookCard = ({ image, title, description, price, currency, _id }) => {

    return (
        <Col lg={2}>
            <Link to={'/book/details/' + _id} ><Image className='card-image' variant="top" src={image} alt={title + 'profile image'} /></Link>
        </Col>
    )
}

export default BookCard