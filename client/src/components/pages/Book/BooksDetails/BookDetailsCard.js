import { Component } from "react"
import { Spinner, Container, Col, Row, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


class BookDetailsCard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        const { loggedUser } = this.props

        return (
            <Container>
                {!this.props.title
                    ?
                    <Spinner className='spinner' animation="grow" variant="info" size="lg" />
                    :
                    <>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Image className='cover-img' src={this.props.image} alt={this.props.title} />
                            <h3 className='profile-name'>{this.props.title}<Image className='profile-check' src='' /></h3>
                            <p className='profile-email'>{this.props.description} | {this.props.price} €</p>
                            <p className='profile-bio'></p>
                            <p className='profile-email'><Link className='link-botton' to={'/profile/' + this.props.owner[0]._id}>{this.props.owner[0].firstName} {this.props.owner[0].lastName}</Link></p>
                            <br></br>
                            {/* contact owner */}
                        </Col>
                        {loggedUser && loggedUser.role === "ADMIN" && this.props.negateBook
                            ?
                            <Col md={{ span: 4, offset: 4 }}>
                                {this.props.accepted
                                    ?
                                    <Row className="mb-3"> {<button className='link-botton' onClick={() => this.props.negateBook()}>Negate book</button>}</Row>
                                    :
                                    <Row className="mb-3"> {<button className='create-button' onClick={() => this.props.confirmBook()}>Confirm book</button>}</Row>}
                            </Col>
                            :
                            <Col md={{ span: 4, offset: 4 }}>
                                <Row className="mb-3">Enlace a la pagina de dealles</Row>
                            </Col>}
                    </>
                }
            </Container>
        )
    }
}

export default BookDetailsCard