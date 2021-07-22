import { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import UnSplashService from '../../../services/unSplash.service'
import UnSplashApiService from '../../../services/unSplashapi.service'
import RandomImgCard from './RandomImgCard'


class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            photos: undefined,
        }

        this.unsplashService = new UnSplashService()
        this.unsplashApiService = new UnSplashApiService()

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
            .catch(err => console.log(err))
    }



    componentDidMount = () => {
        this.loadUnsplash()
    }


    render() {
        return (
            !this.state.photos
                ? <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                :
                (
                    <>
                            <div className="home-page-random-div">
                                {this.state.photos.map(elm => <RandomImgCard key={elm.id} {...elm} />)}
                                {this.state.photos.map(elm => <RandomImgCard key={elm.id} {...elm} />)}
                            </div>
                    </>
                )
        )
    }

}


export default HomePage