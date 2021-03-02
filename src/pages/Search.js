import React, { Component, useState } from "react";
import API from "../utils/API"
import SearchBar from "../components/searchbar"
import SearchResults from "../components/searchresults"

class Search extends Component {
    state = {
        search: "",
        users: [],
        results: []
    }
    
    componentDidMount() {
        API.getUser().then(res => this.setState({
            users: res.data.results,
            results: res.data.results
        })).catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({search: event.target.value})
        const { search, users } = this.state;
        
        if (search === "" ){
            return;
        }
        else {
            const results = users.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));
            this.setState({results});
        }
      };

      handleRefresh() {
          window.location.reload();
      }

      handleSort = () => {
        const { results } = this.state;
        const sort = results.sort((a,b) => {
            if (a.location.state > b.location.state) { return 1 } 
            else { return -1 } 
        })
        this.setState({ results: sort })
      }

    render(){
        return(
            <div>
            <SearchBar
                 handleInputChange={this.handleInputChange}
                 handleRefresh={this.handleRefresh}
                />
            <SearchResults 
            results={this.state.results}
            handleSort={this.handleSort}
            />
        </div >
        )
    }
}

export default Search
