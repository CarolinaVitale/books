import { Component } from "react"
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.timeline,
            appName: 'React Search Bar',
            list: undefined,
        }
    }


    searchData(e) {
       
        const filteredBooks = this.state.data.filter( book =>{
           return  book.title.toLowerCase().includes(e.target.value.toLowerCase())
        })

        this.setState({ list: filteredBooks })
    }

    componentDidMount () {
   
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.timeline?.length !== prevProps.timeline?.length) {
    //         this.setState({ data: this.props.timeline })
    //     }
    // }

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