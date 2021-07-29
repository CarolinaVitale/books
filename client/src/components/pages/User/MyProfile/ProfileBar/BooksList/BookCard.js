import { Col, Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const BookCard = ({ image, title, _id }) => {

    return (
        <Col lg={3}>
            <Link to={'/book/details/' + _id} ><Image className='card-image' variant="top" src={image} alt={title + 'profile image'} /></Link>
        </Col>
    )
}

export default BookCard