import { Col, Image} from "react-bootstrap"

const UserProfileCard = ({ email, firstName, lastName, cover, image, _id }) => {

    return (
        <>
            <Col md={{ span: 4, offset: 4 }}>
                <Image className='cover-img' src={cover} />
                <Image className='profile-img' src={image} roundedCircle />
                <h3 className='profile-name'>{firstName} {lastName} <Image className='profile-check' src='' /></h3>
                <p className='profile-email'>{email}</p>
                <button className='profile-button'>follow</button>{' '}
            </Col>
        </>
    )
}

export default UserProfileCard