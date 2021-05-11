import React from "react";
import { Typography } from "@material-ui/core";
import "../styles/LandingPage.css";
import SearchBoxComponent from "./SearchBoxComponent";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="searchComponent">
          <SearchBoxComponent />
        </div>
        <div className="footer">
          <Typography align="center" color="inherit" variant="body2">
            Maher Bouidani@2021 Shopify Front End Internship Challenge{" "}
          </Typography>
        </div>
      </div>
    );
  }
}

export default LandingPage;
