import { Row } from "react-bootstrap"
import { Col, Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const PostCard = ({ image, title, text, _id }) => {

    return (
        <Col lg={2}>
            <div className="friend-card">
                <Link to={'/post/details/' + _id} ><Image className='card-image' variant="top" src={image} alt={title + 'profile image'} /></Link>
                <Card.Body>
                    <h6 className="text">{title}</h6>
                    <p>{text}</p>
                </Card.Body>
            </div>
        </Col>
    )
}

export default PostCard