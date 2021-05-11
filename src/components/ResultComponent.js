import React from "react";
import Paper from "@material-ui/core/Paper";
import "../styles/ResultComponentCss.css";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Typography } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nominationsList: [], openSuccessBar: false };
    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
    this.updateSuccessBar = this.updateSuccessBar.bind(this);
  }

  addNomination(e) {
    let selectedMovie = {};
    selectedMovie.title = e.currentTarget.parentNode.childNodes[0].innerText;
    selectedMovie.id = e.currentTarget.getAttribute("data");

    if (this.state.nominationsList.length < 5) {
      this.setState((prevState) => ({
        nominationsList: [...prevState.nominationsList, selectedMovie]
      }));
      e.target.disabled = true;
    }
  }

  removeNomination(e) {
    let selectedMovieId = e.currentTarget.parentNode.getAttribute("data");
    let currentMovieIndex = -1;

    this.state.nominationsList.forEach((movie, index) => {
      if (movie.id === selectedMovieId) {
        currentMovieIndex= index;
      }
    });
 
    if (currentMovieIndex >= 0) {
      this.state.nominationsList.splice(currentMovieIndex, 1);
      const button = document.getElementById(selectedMovieId);
      button.disabled = false;
    }

    this.forceUpdate();
  }

  updateSuccessBar(status) {
    this.setState({ openSuccessBar: status });
  }

  render() {
    return (
      <div className="root">
        <Snackbar
          autoHideDuration={4000}
          open={this.state.openSuccessBar}
          onClose={() => this.updateSuccessBar(false)}
        >
          <Alert
            onClose={() => this.updateSuccessBar(false)}
            severity="success"
          >
            You have successfully selected your 5 nominees
          </Alert>
        </Snackbar>
        <Paper className="search-result" elevation={3}>
          <Typography>Results for "{this.props.search}"</Typography>
          <ul>
            {this.props.result.map((item, index) => {
              return (
                <div key={index}>
                  <li className="list" key={index}>
                    <span>{item.Title}</span>

                    <button
                      className="button"
                      onClick={(e) => {
                        this.addNomination(e);
                        this.updateSuccessBar(
                          this.state.nominationsList.length >= 4
                        );
                      }}
                      data={item.imdbID}
                      id={item.imdbID}
                    >
                      Nominate
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </Paper>
        <Paper className="nominationBox" elevation={3}>
          <Typography>Nominations</Typography>

          <ul>
            {this.state.nominationsList.map((item, index) => {
              return (
                <div key={index}>
                  <li className="list" data={item.id}>
                    <span>{item.title}</span>
                    <button className="button" onClick={this.removeNomination}>
                      Remove
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </Paper>
      </div>
    );
  }
}

export default ResultComponent;
