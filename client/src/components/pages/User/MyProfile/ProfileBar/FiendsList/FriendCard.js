import { Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const FriendCard = ({ firstName, cover, _id }) => {

    return (
        <Col lg={3}>
            <Link to={'/profile/' + _id} ><Image className='card-image' variant="top" src={cover} alt={firstName + 'profile'} /></Link>
        </Col>
    )
}

export default FriendCard