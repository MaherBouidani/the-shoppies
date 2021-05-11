import React from "react";
import Paper from "@material-ui/core/Paper";
import "../styles/SearchResultCss.css";
import { Typography } from "@material-ui/core";

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nominations: [] };
    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
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
    } else {
      alert("You have selected 5 nominiees");
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

  render() {
    return (
      <div className="root">
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
                      onClick={this.addNomination}
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
