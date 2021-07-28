import { Component } from "react"
import Item from "./Item"

class SearchResult extends Component {

    render() {
        return (
            <div className='border-results'>
                <ul className='search-results'>
                    {this.props.data.map(function (value) {
                        return <Item key={value} val={value.title} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchResult