import { Col, Card, Image } from "react-bootstrap"

const PostCard = ({ image, title, text}) => {

    return (
        <Col md={3}>
            <div className="friend-card">
                <Image variant="top" src={image} alt={title + 'profile image'} roundedCircle />
                <Card.Body>
                    <h6 className="text">{title}</h6>
                    <p>{text}</p>
                </Card.Body>
            </div>
        </Col>
    )
}

export default PostCard