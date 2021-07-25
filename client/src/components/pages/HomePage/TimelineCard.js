import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const TimelineCard = ({ image, review, owner, _id, title, description, price, currency, text }) => {

    return (
        <Col md={3}>
            <div className="items-card">
                <Card.Img variant="top" src={image} alt={title + ' image'} />
                <Link className="nav-link" to={price ? '/book/details/' + _id : '/post/details/' + _id}>
                    <Card.Body>
                        <h3 className="text">{title}</h3>
                        <p className="text-trunc">{description ? description : text}</p>
                        <p>{price} {currency}</p>

                    </Card.Body>
                </Link>
            </div>
        </Col>
    )
}

export default TimelineCard