import React from "react";
import SearchBar from "material-ui-search-bar";
import ResultComponent from "./ResultComponent";

class SearchBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userSearch: undefined,
      searchResult: undefined,
      errorMessage: undefined,
      isLoading: false,
    };

    this.getMovies = this.getMovies.bind(this);
  }
  //getMovies Promise on ser search action will resolve in an api response of the list of movies
  async getMovies(searchValue) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=a2455e33&type=movie&s=${searchValue}`
    );
    const data = await response.json();

    // setting up the state (i.e., searchResult) with the data from the api repsonse

    if (response.ok) {
      this.setState({
        searchResult: data.Search,
        isLoading: true,
      });
    } else {
      this.setState({
        errorMessage: "Sorry ! Something has gone wrong, please try again!",
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar
            value={this.state.userSearch}
            onChange={(newUserSearch) =>
              this.setState({ userSearch: newUserSearch, isLoading: false })
            }
            onRequestSearch={() => this.getMovies(this.state.userSearch)}
            onCancelSearch={() =>
              this.setState({ userSearch: undefined, isLoading: false })
            }
          />
        </div>
        <div>
          {this.state.isLoading && (
            <ResultComponent
              result={this.state.searchResult}
              search={this.state.userSearch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SearchBoxComponent;
