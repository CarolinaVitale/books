import { Component } from 'react'
import BookService from '../../../../services/books.service'
import { Container, Image, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class BookDetails extends Component {

    constructor() {
        super()
        this.state = {
            book: undefined
        }
        this.booksService = new BookService()
    }


    componentDidMount() {


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


    render() {

        return (

            <Container>

                {!this.state.book
                    ?
                    <Spinner />
                    :
                    <>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.state.book.image} alt={this.state.book.title} />
                            <h3 className='profile-name'>{this.state.book.title}<Image className='profile-check' src='' /></h3>
                            <p className='profile-email'>{this.state.book.description} | {this.state.book.price} €</p>
                            <p className='profile-bio'></p>
                            <p className='profile-email'><Link className='link-botton' to={'/profile/' + this.state.book.owner[0]._id}>{this.state.book.owner[0].firstName} {this.state.book.owner[0].lastName}</Link></p>
                            <br></br>
                        </Col>

                    </>
                }

            </Container>
        )
    }
}


export default BookDetails