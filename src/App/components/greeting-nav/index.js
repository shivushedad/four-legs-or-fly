import React, {Component} from "react";

class GreetingNav extends Component {
  render() {
    return (
      <nav align = "center">
        <h2>{this.props.welcomeMessage}</h2>
      </nav>
    );
  }
};

export default GreetingNav;

