import React from "react";
import Paper from "@material-ui/core/Paper";
import "../styles/SearchResultCss.css";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Typography } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nominations: [], openSnackBar: false };
    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
    this.updateSnackBar = this.updateSnackBar.bind(this);
  }

  addNomination(e) {
    let curr = {};
    curr.title = e.currentTarget.parentNode.innerText;
    curr.id = e.currentTarget.getAttribute("data");

    if (this.state.nominations.length < 5) {
      this.setState((prevState) => ({
        nominations: [...prevState.nominations, curr],
      }));
      e.target.disabled = true;
    }
  }

  removeNomination(e) {
    let curent_id = e.currentTarget.parentNode.getAttribute("data");
    let current_index = -1;

    this.state.nominations.forEach((movie, index) => {
      if (movie.id === curent_id) {
        current_index = index;
      }
    });

    if (current_index >= 0) {
      this.state.nominations.splice(current_index, 1);
      const button = document.getElementById(curent_id);
      button.disabled = false;
    }

    this.forceUpdate();
  }

  updateSnackBar(status) {
    this.setState({ openSnackBar: status });
  }


  render() {
    return (
      <div className="root">
        <Snackbar
          autoHideDuration={4000}
          open={this.state.openSnackBar}
          onClose={() => this.updateSnackBar(false)}
          
        >
          <Alert onClose={() => this.updateSnackBar(false)} severity="success">
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
                        this.updateSnackBar(this.state.nominations.length >= 4);
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
            {this.state.nominations.map((item, index) => {
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
