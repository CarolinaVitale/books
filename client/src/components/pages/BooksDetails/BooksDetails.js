import { Component } from 'react'
import BookService from '../../../services/books.service'
import { Container, Row, Col } from 'react-bootstrap'
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
            .then(response => this.setState({ book: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.book
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>Título: {this.state.book.title}</h1>
                            <p>Description: {this.state.book.description}</p>

                            <hr></hr>

                            <p>Precio {this.state.book.price}</p>
                            <p>Propietario: {this.state.book.owner}</p>

                            <hr></hr>

                            <Link to="/s" className="btn btn-dark">Volver al listado</Link>

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