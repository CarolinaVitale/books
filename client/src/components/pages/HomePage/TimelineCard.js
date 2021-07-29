import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const TimelineCard = ({ image, _id, title, price }) => {

    return (
        <Col md={3} className='home-col'>
            <Link className="nav-link" to={price ? '/book/details/' + _id : '/post/details/' + _id}>
                <img className='card-img' src={image} alt={title + ' image'} />
                <button className="title">{title}</button>
            </Link>
        </Col>
    )
}

export default TimelineCard

