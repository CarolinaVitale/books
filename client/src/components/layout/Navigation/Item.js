import { Component } from "react"


class Item extends Component {
    render() {
        return (
            <li className='search-results'>
                {this.props.val}
            </li>
        )
    }
}

export default Item