import { Component } from 'react'
import { Container, Form, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReviewService from '../../../services/reviews.service'
import UploadsService from '../../../services/uploads.service'


class ReviewsForm extends Component {

    constructor() {
        super()
        this.state = {
            post: {
                title: '',
                text: '',
                points: '',
                owner: '',
            },
            loading: false
        }

        this.reviewsService = new ReviewService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ post: { ...this.state.post, [name]: value } })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        this.postService
            .postCreate(this.state.post)
            .then(() => {
                this.props.history.push('/')
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>

                        <h1>New Review</h1>
                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="text">
                                    <Form.Label>Review</Form.Label>
                                    <Form.Control type="text" value={this.state.text} onChange={this.handleInputChange} name="text" placeholder="Review" />
                                </Form.Group>
                            </Row>

                            <button className='btn-form' type="submit">Submit</button>
                        </Form>

                        <hr></hr>
                        <Link to="/">
                            <button className='btn-form'>go back</button>
                        </Link>
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default ReviewsForm