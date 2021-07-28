import { Component } from 'react'
import PostService from '../../../../services/posts.service'
import { Spinner, Image, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostEdit from '../EditPost/EditForm'
import ReviewsForm from '../../Review/ReviewsForm'
import PostDetailsCard from './PostDetailsCard'


class PostDetails extends Component {

    constructor() {
        super()
        this.state = {
            post: undefined,
            modal: false,

        }
        this.postsService = new PostService()
    }

    loadPost = () => {

        const { post_id } = this.props.match.params

        this.postsService
            .postDetails(post_id)
            .then(response => this.setState({ post: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount() {

        this.loadPost()
    }

    render() {

        const { loggedUser, storeUser, history } = this.props
    

        return (
            <PostDetailsCard {...this.state.post} loggedUser={loggedUser} storeUser={storeUser} history={history}/>
        )
    }
}


export default PostDetails