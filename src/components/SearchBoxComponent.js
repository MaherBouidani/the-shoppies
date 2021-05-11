import React from "react";
import SearchBar from "material-ui-search-bar";
import ResultComponent from "./ResultComponent";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SearchBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userSearch: undefined,
      searchResult: undefined,
      errorMessage: undefined,
      noDataFromAPI: undefined,
      isLoading: false,
      openInformationBar: true,
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
      if (data.Response === "True") {
        this.setState({
          searchResult: data.Search,
          isLoading: true,
          noDataFromAPI: false,
        });
      } else {
        this.setState({ noDataFromAPI: true, openInformationBar: true }); //If there is no data available from the API, show an information bar message to the user
      }
    } else {
      this.setState({
        errorMessage: "Sorry ! Something has gone wrong, please try again!",
      });
    }
  }

  updateInformationBar(status) {
    this.setState({ openInformationBar: status });
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
            placeholder="Search Movie Title"
          />
        </div>
        <div>
          {this.state.noDataFromAPI && (
            <Snackbar
              open={this.state.openInformationBar}
              autoHideDuration={4000}
              onClose={() => this.updateInformationBar(false)}
            >
              <Alert
                onClose={() => this.updateInformationBar(false)}
                severity="info"
              >
                Sorry ! It is us and not you. We do not have data available at
                this time
              </Alert>
            </Snackbar>
          )}
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
