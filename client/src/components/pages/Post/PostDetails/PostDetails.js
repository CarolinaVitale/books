import { Component } from 'react'
import PostService from '../../../../services/posts.service'
import { Container, Spinner, Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
            .then(res => {
                console.log(res)
                return res
            })
            .then(response => this.setState({ post: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.post
                    ?
                    <Spinner />
                    :
                    <>

                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.state.post.image} alt={this.state.post.title} />
                            <h3 className='profile-name'>{this.state.post.title}<Image className='profile-check' src='' /></h3>
                            
                            <p className='profile-bio'>{this.state.post.text}</p>
                            <p className='profile-email'><Link className='link-botton' to={'/profile/' + this.state.post.owner[0]._id}>{this.state.post.owner.firstName} {this.state.post.owner.lastName}</Link></p>
                            <br></br>
                            <p className='profile-email'>Reviews: {this.state.post.review.map(elm => <p>{elm.text}</p>)}</p>
                        </Col>
                    </>
                }

            </Container>
        )
    }
}


export default PostDetails