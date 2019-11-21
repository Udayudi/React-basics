import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }

  changeTitle = title => {
    this.setState({ title });
  };

  // changeTitle = this.changeTitle.bind(this);

  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <Footer />
      </div>
    );
  }
}

export default Layout;
