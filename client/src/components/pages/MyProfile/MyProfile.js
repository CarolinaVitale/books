import { Col, Image } from "react-bootstrap"
import ProfileBar from '../ProfileBar/ProfileBar'

const MyProfile = ({ loggedUser }) => {


    return (
        <>
            <Col md={{ span: 4, offset: 4 }}>
                <Image className='cover-img' src={loggedUser.cover} />
                <Image className='profile-img' src={loggedUser.image} roundedCircle />
                <h3 className='profile-name'>{loggedUser.firstName} {loggedUser.lastName} <Image className='profile-check' src='' /></h3>
                <p className='profile-email'>{loggedUser.email}</p>
                <p className='profile-bio'>{loggedUser.bio}</p>
                <br></br>
                <ProfileBar />
            </Col>
        </>
    )
}

export default MyProfile