import { Component } from "react"
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ 'ahahs', 'ajajjsjab', 'ahahhskdihcnms', 'zzkajijasdjij', 'ccnjdcnjdnccdjnjd', 'dhcbhb'],
            appName: 'React Search Bar',
            list: undefined,
        }
    }

    
    //     const { books, posts} = props
    //     const list = books.concat(posts)
    // createList =()=>{
        //     this.setState({data:[...list]})
        // }
        searchData(e) {
            var queryData = [];
            if (e.target.value != '') {
                this.state.data.forEach(function (booksPosts) {
                    if (booksPosts.toLowerCase().indexOf(e.target.value) != -1) {
                        if (queryData.length < 10) {
                            queryData.push(booksPosts)
                        }
                    }
                });
            }
            this.setState({ list: queryData })
        }
        
        render() {
            
            console.log(this.props)
        return (
            <div>
                <SearchBar search={this.searchData.bind(this)} />
                {(this.state.list) ? <SearchResult data={this.state.list} /> : null}
            </div>
        )
    }
}

export default SearchPage