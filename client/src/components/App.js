import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Component } from 'react'

import Routes from './routes'
import AuthService from '../services/auth.service'
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedUser: undefined }
    this.authService = new AuthService()
  }

  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(theLoggedUser => this.storeUser(theLoggedUser.data))
      .catch(() => this.storeUser(undefined))
  }

  componentDidMount = () => this.fetchUser()

  render() {

    return (
      <>
        <Navigation {...this.props} storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <Routes {...this.props} storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <Footer />
      </>

    )
  }
}


export default App
