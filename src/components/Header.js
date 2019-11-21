import React, { Component } from "react";
import Title from "./Header/Title";
class Header extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input
          value={this.props.title}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default Header;
