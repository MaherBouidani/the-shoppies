import React from "react";
import { Typography, Paper } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";


class SearchBox extends React.Component {

    constructor(){
        super()
        this.state ={userSearch:undefined
        };

        this.getMovies = this.getMovies.bind(this);
    }

    async getMovies(searchValue){

        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a2455e33&type=movie&s=${searchValue}`);
        const data = await response.json();

        console.log(data);



    }
  render() {
    return (
      <div>
        <SearchBar value ={this.state.userSearch}
        onChange={(newUserSearch) => this.setState({ userSearch: newUserSearch })}
        onRequestSearch={() => this.getMovies(this.state.userSearch)}
        onCancelSearch={() => this.setState({userSearch:undefined})}/>
      </div>
    );
  }
}

export default SearchBox;