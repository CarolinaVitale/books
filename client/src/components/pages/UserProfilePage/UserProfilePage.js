import { Col } from "react-bootstrap"

const UserProfileCard = ({ email, firstName, lastName, cover, image, _id }) => {

    return (
        <>
            <Col md={4}>
                    <img className='cover-img' variant="top" src={cover} />
                    <img src={image} />
                   
                        
            </Col>
        </>
    )
}

export default UserProfileCard