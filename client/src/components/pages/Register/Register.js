import { Component } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'


class Register extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            image: '',
            cover: '',
            bio: '',
            road: '',
            apartment: '',
            city: '',
            state: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        const { email, password, firstName, lastName, image, cover, bio, road, apartment, city, state } = this.state

        this.authService
            .signup(email, password, firstName, lastName, image, cover, bio, road, apartment, city, state)
            .then(() => this.props.history.push('/login'))
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Sign Up</h1>

                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="text" value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Username" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Password" />
                                </Form.Group>
                            </Row>
                            

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="firstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="First name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="lastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Last name" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="bio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control type="text" value={this.state.bio} onChange={this.handleInputChange} name="bio" placeholder="Bio" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="road">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={this.state.road} onChange={this.handleInputChange} name="road" placeholder="Street, number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="apartment">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control type="text" value={this.state.apartment} onChange={this.handleInputChange} name="apartment" placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" value={this.state.city} onChange={this.handleInputChange} name="city" placeholder="City" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" value={this.state.state} onChange={this.handleInputChange} name="state" placeholder="State" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="zip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" value={this.state.zip} onChange={this.handleInputChange} name="zip" placeholder="Zip" />
                                </Form.Group>
                            </Row>
                            <button className='btn-form' type="submit">Submit</button>
                        </Form>

                        <hr></hr>

                        <Link to="/">
                            <button className='btn-form'>go back</button>
                        </Link>

                    </Col>
                </Row>

            </Container >

        )
    }
}


export default Register