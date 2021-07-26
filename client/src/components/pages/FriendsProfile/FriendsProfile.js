import { Component } from 'react'
import { Spinner, Col, Image, Row, Modal } from 'react-bootstrap'

import UserService from '../../../services/users.service'
import ProfileBar from '../User/MyProfile/ProfileBar/ProfileBar'
import BooksForm from '../Book/BooksForm/BooksForm'
import PostsForm from '../Post/PostsForm/PostsForm'

class FriendsProfile extends Component {

    constructor() {
        super()
        this.state = {
            otherUser: undefined,
            books: undefined,
            friends: undefined,
            posts: undefined,
            follow: false,
        }
        this.userService = new UserService()
    }

    followUnfollow = (user_id, follow, follow_id) => {

        this.userService
            .followUnfollow(user_id, follow, follow_id)
            .then((res) => {
                this.setState({ follow: true })
                console.log('vamos a morir', res.data.friends)
            })
            .catch(err => console.log(err))
    }

    loadUser = () => {

        const { user_id } = this.props.match.params

        this.userService
            .othersProfile(user_id)
            .then(res => {
                console.log('res.data', res.data)
                return res
            })
            .then(response => this.setState({ otherUser: response.data[0], friends: response.data[0].friends, books: response.data[1], posts: response.data[2] }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadUser()
    }
    //props.match es lo del /:id



    render() {

        const { loggedUser, storeUser, history } = this.props

        return (

            !this.state.otherUser

                ? <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                :
                (
                    <>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Image className='cover-img' src={this.state.otherUser.cover} />
                            <Image className='profile-img' src={this.state.otherUser.image} roundedCircle />
                            <h3 className='profile-name'>{this.state.otherUser.firstName} {this.state.otherUser.lastName}</h3>
                            <p className='profile-email'>{this.state.otherUser.email}</p>
                            <p className='profile-bio'>{this.state.otherUser.bio}</p>
                            <br></br>
                        </Col>

                        <Col md={{ span: 4, offset: 4 }}>
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


                                {!loggedUser
                                    ? <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                                    :
                                    <Col>
                                        {loggedUser.friends.find(elm => {
                                            console.log('vamos a seguir Caro', elm, this.state.otherUser._id)
                                            return elm === this.state.otherUser._id
                                        }) ?
                                            <button className='follow-button' onClick={() => this.followUnfollow(this.state.otherUser._id, true, (loggedUser._id))} loggedUser={loggedUser} >unfollow</button> :
                                            <button className='follow-button' onClick={() => this.followUnfollow(this.state.otherUser._id, false, (loggedUser._id))} loggedUser={loggedUser} >follow</button>}
                                    </Col>}
                            </Row>
                        </Col>
                        <br></br>
                        <ProfileBar {...this.props} books={this.state.books} friends={this.state.friends} posts={this.state.posts} />
                    </>
                )
        )
    }
}



export default FriendsProfile