import { Component } from "react"
import { Spinner, Modal, Col, Row, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import ReviewsForm from "../../Review/ReviewsForm"
import PostEdit from "../EditPost/EditForm"
import heart from './heart.svg'

class PostDetailsCard extends Component {

    constructor() {
        super()
        this.state = {
            modal: false,
        }
    }

    printHearts = (valor) => {
        const rate = []
        for (let i = 0; i < valor; i++) {
            rate.push(<img className='heart' src={heart}></img>)
        }
        return rate
    }


    render() {

        const { history, loggedUser, storeUser, loadPost, review } = this.props

        review?.reverse()

        return (
            <>
                {!this.props.title
                    ?
                    <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                    :
                    <>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.props.image} alt={this.props.title} />
                            <h3 className='profile-name'>{this.props.title}<Image className='profile-check' src='' /></h3>
                            <p className='profile-bio'>{this.props.text}</p>
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <Row className="mb-3">

                                <Col>
                                    {<button className='mint-button'><Link className="normalize-link" to={'/profile/' + this.props.owner[0]._id}>{this.props.owner[0].firstName} {this.props.owner[0].lastName}</Link></button>}
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
                        <Col md={{ span: 4, offset: 4 }}>
                            <p className='profile-email'>Reviews: </p>
                            {review.map(elm =>
                                <div>
                                    {this.printHearts(elm.points)}
                                    <h4>{elm.title}</h4>
                                    <p>{elm.text}</p>
                                </div>
                            )}
                        </Col>

                        <Modal
                            backdrop="static"
                            keyboard={false}
                            size='lg' show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                                {!this.props.review ?
                                    <PostEdit {...this.props} history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />
                                    : <ReviewsForm loadPost={loadPost} {...this.props} history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />}
                            </Modal.Body>
                        </Modal>
                    </>
                }
            </>
        )
    }
}

export default PostDetailsCard