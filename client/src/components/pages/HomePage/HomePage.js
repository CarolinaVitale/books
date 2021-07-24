import { Component } from 'react'
import { Modal, Spinner, Row } from 'react-bootstrap'
import UnSplashService from '../../../services/unSplash.service'
import UnSplashApiService from '../../../services/unSplashapi.service'
import BookService from '../../../services/books.service'
import PostService from '../../../services/posts.service'

import RandomImgCard from './RandomImgCard'
import TimelineCard from './TimelineCard'
import Login from '../Login/Login'

class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            photos: undefined,
            books: false,
            posts: false,
            modal: false,
            loading: false,
        }

        this.unsplashService = new UnSplashService()
        this.unsplashApiService = new UnSplashApiService()
        this.bookService = new BookService()
        this.postService = new PostService()

    }

    queryForImages = response => {

        const randomNum = Math.trunc(Math.random() * 60 - 1)
        const query = 'books'
        const url = `?page=${randomNum}&per_page=12&query=${query}&client_id=${response}`

        this.unsplashService
            .magicSplash(url)
            .then(response => this.setState({ photos: response.data.results }))
            .catch(err => console.log(err))

    }

    loadUnsplash = () => {

        this.unsplashApiService
            .getUnsplash()
            .then(response => this.queryForImages(response.data))
            .then(this.setState({ loading: true }))
            .catch(err => console.log(err))
    }

    getTimeline = () => {
        const getBooks = this.bookService.bookList()
        const getPosts = this.postService.postList()

        Promise
            .all([getBooks, getPosts])
            .then(response => {
                this.setState({ books: response[0].data, posts: response[1].data })
            })
            .catch(err => console.log(err))
    }

    listenScrollEvent() {
        this.state.modal === false && this.setState({ modal: true })
    }



    componentDidMount = () => {
        window.addEventListener('scroll', this.listenScrollEvent.bind(this));
        this.loadUnsplash()
        this.getTimeline()
    }

    componentDidUpdate = () => {
        this.getTimeline()
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {

        const { loggedUser, storeUser, history } = this.props

        return (
            !this.state.photos
                ?
                <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                :
                <>
                    {
                        !loggedUser
                            ?
                            <>
                                <div className="home-page-top"  >
                                    <h1> NOT LOGGED</h1>
                                </div>
                                <div className="random-img">
                                    {
                                        !this.state.loading
                                            ?
                                            <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                                            :
                                            <>
                                                {this.state.photos.map(elm => <RandomImgCard key={elm.id} {...elm} />)}
                                                {this.state.photos.reverse().map(elm => <RandomImgCard key={elm.id} {...elm} />)}

                                                <Modal className='login-modal' show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                                    <Login history={history} handleFormSubmit={this.onSubmit} storeUser={storeUser} />
                                                </Modal>
                                            </>
                                    }
                                </div>
                            </>
                            : <><div className="decambiar"></div>
                                <Row className="timeline">
                                    {this.state.books.map(elm => <TimelineCard key={elm.id} {...elm} />)}
                                    {this.state.posts.map(elm => <TimelineCard key={elm.id} {...elm} />)}
                                </Row>
                            </>
                    }
                </>
        )
    }

}


export default HomePage