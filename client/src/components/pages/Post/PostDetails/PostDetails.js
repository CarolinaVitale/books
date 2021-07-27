import { Component } from 'react'
import PostService from '../../../../services/posts.service'
import {  Spinner, Image, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostEdit from '../EditPost/EditForm'
import ReviewsForm from '../../Review/ReviewsForm'


class PostDetails extends Component {

    constructor() {
        super()
        this.state = {
            post: undefined,
            modal: false,
            
        }
        this.postsService = new PostService()
    }


    componentDidMount() {


        const { post_id } = this.props.match.params

        this.postsService
            .postDetails(post_id)
            .then(res => {
                console.log(res)
                return res
            })
            .then(response => this.setState({ post: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        const { loggedUser, storeUser, history } = this.props

        return (

            <>

                {!this.state.post
                    ?
                    <Spinner />
                    :
                    <>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.state.post.image} alt={this.state.post.title} />
                            <h3 className='profile-name'>{this.state.post.title}<Image className='profile-check' src='' /></h3>
                            <p className='profile-bio'>{this.state.post.text}</p>
                        </Col>


                        <Col md={{ span: 6, offset: 3 }}>
                            <Row className="mb-3">

                                <Col>
                                    {<button className='mint-button'><Link className="normalize-link" to={'/profile/' + this.state.post.owner[0]._id}>{this.state.post.owner[0].firstName} {this.state.post.owner[0].lastName}</Link></button>}
                                </Col>
                                <Col>
                                    {<button className='blue-button' onClick={() => this.setState({ modal: true, review: true })}>add review</button>}
                                </Col>
                                <Col>
                                    {<button className='pink-button' onClick={() => this.setState({ modal: true })}>edit post</button>}
                                </Col>
                            </Row>
                        </Col>

                        <br></br>

                        <p className='profile-email'>Reviews: {this.state.post.review.map(elm => <p>{elm.text}</p>)}</p>

                        <Modal
                            backdrop="static"
                            keyboard={false}
                            size='lg' show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                                {!this.state.review ?
                                    <PostEdit {...this.props} history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />
                                    : <ReviewsForm {...this.props} history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />}
                            </Modal.Body>
                        </Modal>
                    </>
                }
            </>
        )
    }
}


export default PostDetails