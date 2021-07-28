import { Component } from 'react'
import BookService from '../../../../services/books.service'
import { Container, Image, Col, Spinner, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class BookDetails extends Component {

    constructor() {
        super()
        this.state = {
            book: undefined,

        }
        this.booksService = new BookService()
    }

    bookToConfirm = (bool) => {

        const { book_id } = this.props.match.params
        
        this.booksService
            .bookConfirmed(bool, book_id)
            .then(res => {
                return res
            })
            .catch(err => console.log(err))
    }


    negateBook = () => {
        this.setState({ book: { ...this.state.book, accepted: false } })
        this.bookToConfirm(this.state.book.accepted)
    }

    confirmBook = () => {
        this.setState({ book: { ...this.state.book, accepted: true } })
        this.bookToConfirm(this.state.book.accepted)

    }


    loadBook = () => {

        const { book_id } = this.props.match.params

        this.booksService
            .bookDetails(book_id)
            .then(res => {
                console.log(res)
                return res
            })
            .then(response => this.setState({ book: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount() {

        this.loadBook()


    }


    render() {

        return (

            <Container>

                {!this.state.book
                    ?
                    <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                    :
                    <>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.state.book.image} alt={this.state.book.title} />
                            <h3 className='profile-name'>{this.state.book.title}<Image className='profile-check' src='' /></h3>
                            <p className='profile-email'>{this.state.book.description} | {this.state.book.price} €</p>
                            <p className='profile-bio'></p>
                            <p className='profile-email'><Link className='link-botton' to={'/profile/' + this.state.book.owner[0]._id}>{this.state.book.owner[0].firstName} {this.state.book.owner[0].lastName}</Link></p>
                            <br></br>
                            {/* contact owner */}
                        </Col>
                        {this.props.loggedUser && this.props.loggedUser.role === "ADMIN"
                            ?
                            <Col md={{ span: 4, offset: 4 }}>
                                {this.state.book.accepted
                                    ?
                                    <Row className="mb-3"> {<button className='link-botton' onClick={() => this.negateBook()}>Negate book</button>}</Row>
                                    :
                                    <Row className="mb-3"> {<button className='create-button' onClick={() => this.confirmBook()}>Confirm book</button>}</Row>}
                            </Col>
                            :
                            <Col md={{ span: 4, offset: 4 }}>
                                <Row className="mb-3"></Row>
                            </Col>}
                    </>
                }

            </Container>
        )
    }
}


export default BookDetails