import React, { Component } from "react";

import HomeComponent from "../components/home-component";
import NavContainer from "./general/nav-container";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <HomeComponent />
      </div>
    );
  }
}

export default HomeContainer;
