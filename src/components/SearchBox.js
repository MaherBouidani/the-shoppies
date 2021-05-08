import React from "react";
import { Typography, Paper } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";


class SearchBox extends React.Component {

    constructor(){
        super()
        this.state ={userSearch:undefined,
            searchResult:undefined,
            errorMessage: undefined
        };

        this.getMovies = this.getMovies.bind(this);
    }

    async getMovies(searchValue){

        const response = await fetch(`http://www.omdbapi.com/?apikey=a2455e33&type=movie&s=${searchValue}`);
        const data = await response.json();
        if (response.ok) {
            this.setState({
              searchResult: data.Search
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
        onChange={(newUserSearch) => this.setState({ userSearch: newUserSearch })}
        onRequestSearch={() => this.getMovies(this.state.userSearch)}
        onCancelSearch={() => this.setState({userSearch:undefined})}/>
      </div>
      <div>{this.state.title}</div>
      </div>
    );
  }
}

export default SearchBox;