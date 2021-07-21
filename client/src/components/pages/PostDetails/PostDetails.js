import { Component } from 'react'
import PostService from '../../../services/posts.service'
import { Container, Row, Col } from 'react-bootstrap'



class PostDetails extends Component {

    constructor() {
        super()
        this.state = {
            post: undefined
        }
        this.postsService = new PostService()
    }


    componentDidMount() {


        const { post_id } = this.props.match.params

        this.postsService
            .postDetails(post_id)
            .then(response => this.setState({ post: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.post
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>Título: {this.state.post.title}</h1>
                            <p>Texto: {this.state.post.text}</p>

                            <hr></hr>

                            <p>Propietario: {this.state.post.owner}</p>

                            <hr></hr>



                        </Col>
                        {/* <Col md={6}>
                            <p>Review: {this.state.post.review} </p>

                        </Col> */}

                        <Col md={4}>
                            <img src={this.state.post.image} alt={this.state.post.title} style={{ width: '100%' }} />
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default PostDetails