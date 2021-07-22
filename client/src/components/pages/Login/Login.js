import { Component } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from '../../../services/auth.service'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        const { email, password } = this.state

        this.authService
            .login(email, password)
            .then(loggedUserfromServer => {
                this.props.storeUser(loggedUserfromServer.data)
                this.props.history.push('/profile')         
            })
            .catch(err => console.log(err))
    }



    render() {
        return (

            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1>Login</h1><hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Username" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <button className='btn-form'>Login</button>
                        </Form><hr></hr>
                        <Link to="/">
                            <button className='btn-form'>Back</button>
                        </Link>
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default Login