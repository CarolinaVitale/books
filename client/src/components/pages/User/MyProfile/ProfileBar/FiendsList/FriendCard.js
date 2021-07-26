import { Col, Card, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const FriendCard = ({ email, firstName, lastName, cover, image, bio, _id }) => {

    return (
        <Col lg={2}>
            <div className="friend-card">
                <Link to={'/profile/' + _id} ><Image className='card-image' variant="top" src={cover} alt={firstName + 'profile image'} /></Link>
                <Card.Body>
                    <h6 className="text">{firstName} {lastName}</h6>
                </Card.Body>
            </div>
        </Col>
    )
}

export default FriendCard