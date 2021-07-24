import { Component } from "react"
import { Col, Image, Modal, Row } from "react-bootstrap"
//import ProfileBar from './ProfileBar/ProfileBar'
import BooksForm from "../../Book/BooksForm/BooksForm"
import PostsForm from "../../Post/PostsForm/PostsForm"

class MyProfile extends Component {
    constructor() {
        super()
        this.state = {
            user: undefined,
            modal: false
        }
    }


render() {

    const { loggedUser, storeUser, history } = this.props

    return (
        <>
            <Col className='profile' md={{ span: 4, offset: 4 }}>
                <Image className='cover-img' src={loggedUser.cover} />
                <Image className='profile-img' src={loggedUser.image} roundedCircle />
                <h3 className='profile-name'>{loggedUser.firstName} {loggedUser.lastName} <Image className='profile-check' src='' /></h3>
                <p className='profile-email'>{loggedUser.email}</p>
                <p className='profile-bio'>{loggedUser.bio}</p>
                <br></br>
                <Row className="mb-3">
                    <Col>
                        {<button className='create-button' onClick={() => this.setState({ modal: true, isPost: false })}>add book</button>}
                    </Col>
                    <Col>
                        {<button className='create-button' onClick={() => this.setState({ modal: true, isPost: true })}>add post</button>}
                    </Col>




                    <Modal
                        backdrop="static"
                        keyboard={false}
                        size='lg' show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            {this.state.isPost
                                ? <PostsForm history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />
                                : <BooksForm history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />}
                        </Modal.Body>
                    </Modal>
                    <Col>
                        <button className='follow-button'>edit profile</button>{' '}
                    </Col>
                </Row>

                <br></br>
                {/* <ProfileBar {...this.props} books={this.state.books} friends={this.state.friends} posts={this.state.posts} /> */}
            </Col>
        </>
    )
}
}

export default MyProfile