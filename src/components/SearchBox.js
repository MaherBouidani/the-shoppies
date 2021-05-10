import React from "react";
import { Typography, Paper } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import SearchResult from "./SearchResult";


class SearchBox extends React.Component {

    constructor(){
        super()
        this.state ={userSearch:undefined,
            searchResult:undefined,
            errorMessage: undefined,
            isLoading: false
        };

        this.getMovies = this.getMovies.bind(this);
    }

    async getMovies(searchValue){

        const response = await fetch(`https://www.omdbapi.com/?apikey=a2455e33&type=movie&s=${searchValue}`);
        console.log(response)
        const data = await response.json();
        if (response.ok) {
            this.setState({
              searchResult: data.Search,
              isLoading: true
            });
          } else {
            this.setState({
              errorMessage:
                "Sorry ! Something has gone wrong, please try again!",
            });
          }

        console.log(this.state.searchResult)

    }
  render() {
    return (
        <div>
      <div>
        <SearchBar value ={this.state.userSearch}
        onChange={(newUserSearch) => this.setState({ userSearch: newUserSearch, isLoading:false })}
        onRequestSearch={() => this.getMovies(this.state.userSearch)}
        onCancelSearch={() => this.setState({userSearch:undefined, isLoading:false})}/>
      </div>
      <div>
          {this.state.isLoading && <SearchResult result={this.state.searchResult} search={this.state.userSearch} />}
      </div>
      </div>
    );
  }
}

export default SearchBox;