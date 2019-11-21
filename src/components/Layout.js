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

  render() {
    setTimeout(() => {
      this.setState({
        title: "Welcome Everyone"
      });
    }, 2000);

    return (
      <div>
        <Header title={this.state.title} />
        <Header title={"Other Title"} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
