import React from "react";
import { Typography, Paper } from "@material-ui/core";
import "../styles/LandingPage.css";


class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Typography align="center" color="textPrimary" variant="h2">
            {" "}
            The Shoppies
          </Typography>
        </div>
        <div className="footer">
          <Typography align="center" color="textSecondary" variant="body2">
            Maher Bouidani@2021 Shopify Front End Internship Challenge{" "}
          </Typography>
        </div>
      </div>
    );
  }
}

export default LandingPage;