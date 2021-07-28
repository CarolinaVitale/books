import { Component } from "react"
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

        componentDidUpdate(prevProps, prevState) {
            if(this.props.timeline?.length !== prevProps.timeline?.length){
                this.setState({data: this.props.timeline})
            }
        }
        
        render() {
            
            
        return (
            <div>
                <SearchBar search={this.searchData.bind(this)} />
                {(this.state.list) ? <SearchResult data={this.state.list} /> : null}
            </div>
        )
    }
}

export default SearchPage