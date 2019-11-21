import React, { Component } from "react";
import Titel from "./Header/Title";
class Header extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.titel}</h1>
        <Titel title={this.props.title} />
      </div>
    );
  }
}

export default Header;
