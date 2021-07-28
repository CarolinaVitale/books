import { Component } from "react"


class SearchBar extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.search} placeholder="Search" />
            </div>
        )
    }
}

export default SearchBar