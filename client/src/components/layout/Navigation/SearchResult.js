import { Component } from "react"
import Item from "./Item"

class SearchResult extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map(function (value) {
                        return <Item key={value} val={value} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchResult