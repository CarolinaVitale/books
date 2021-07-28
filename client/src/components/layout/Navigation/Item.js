import { Component } from "react"


class Item extends Component {
    render() {
        return (
            <li>
                {this.props.val}
            </li>
        )
    }
}

export default Item