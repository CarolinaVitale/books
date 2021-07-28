import { Component } from "react"
import { Modal } from "react-bootstrap"
import BookDetails from '../../pages/Book/BooksDetails/BooksDetails'
import PostDetails from '../../pages/Post/PostDetails/PostDetails'


class Item extends Component {
    
    constructor() {
        super()
        this.state = {
            modal: false
        }
    }

    render() {
        const { history, loggedUser, storeUser } = this.props
        return (
            <li className='dropdown'>

                {<button onClick={() => this.setState({ modal: true, isBook: true })}>{this.props.val}</button>}
                {<button onClick={() => this.setState({ modal: true, isBook: false })}>{this.props.val}</button>}

                <Modal
                    backdrop="static"
                    keyboard={false}
                    size='lg' show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        {this.state.isBook
                            ? <BookDetails history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />
                            : <PostDetails history={history} closeModal={() => this.setState({ modal: false })} loggedUser={loggedUser} storeUser={storeUser} />}
                    </Modal.Body>
                </Modal>
            </li>
        )
    }
}

export default Item