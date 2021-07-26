import { Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


const PostCard = ({ image, title,  _id }) => {

    return (
        <Col lg={2}>
            <Link to={'/post/details/' + _id} ><Image className='card-image' variant="top" src={image} alt={title + 'profile image'} /></Link>
        </Col>
    )
}

export default PostCard