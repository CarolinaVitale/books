import { Component } from 'react'
import { Spinner, Col, Image } from 'react-bootstrap'

import UserService from '../../../services/users.service'
import ProfileBar from '../User/MyProfile/ProfileBar/ProfileBar'

class FriendsProfile extends Component {

    constructor() {
        super()
        this.state = {
            otherUser: undefined,
            books: undefined,
            friends: undefined,
            posts: undefined,
        }
        this.userService = new UserService()
    }


    loadUser = () => {

        const { user_id } = this.props.match.params

        this.userService
            .othersProfile(user_id)
            .then( res => {
                console.log(res.data)
                return res
            })
            .then(response => this.setState({ otherUser: response.data[0], friends: response.data[0].friends, books: response.data[1], posts: response.data[2]}))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadUser()
    }
    //props.match es lo del /:id

    render() {
        return (
            !this.state.otherUser
                ? <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                :
                (
                    <>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.state.otherUser.cover} />
                            <Image className='profile-img' src={this.state.otherUser.image} roundedCircle />
                            <h3 className='profile-name'>{this.state.otherUser.firstName} {this.state.otherUser.lastName}</h3>
                            <p className='profile-email'>{this.state.otherUser.email}</p>
                            <p className='profile-bio'>{this.state.otherUser.bio}</p>
                            <br></br>
                            <button className='book-button'>add book</button>
                            <button className='post-button'>add post</button>
                            <br></br>
                            <ProfileBar {...this.props} books={this.state.books} friends={this.state.friends} posts={this.state.posts}/>
                        </Col>
                    </>
                )
        )
    }

}


export default FriendsProfile