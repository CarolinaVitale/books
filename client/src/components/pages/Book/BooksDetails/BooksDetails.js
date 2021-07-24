import { Component } from 'react'
import BookService from '../../../../services/books.service'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
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
            .then( res => {console.log(res)
            return res})
            .then(response => this.setState({ book: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.book
                    ?
                    <Spinner/>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>Title: {this.state.book.title}</h1>
                            <p>Description: {this.state.book.description}</p>

                            <hr></hr>

                            <p>Price: {this.state.book.price}</p>
                            <p>Owner: {this.state.book.owner[0].firstName} {this.state.book.owner[0].lastName}</p>

                            <hr></hr>

                            <Link to="/" className="btn btn-dark">Back to Timeline</Link>

                        </Col>

                        <Col md={4}>
                            <img src={this.state.book.image} alt={this.state.book.title} style={{ width: '100%' }} />
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default BookDetails