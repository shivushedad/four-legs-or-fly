import React, {Component} from "react";

class GreetingNav extends Component {
  render() {
    return (
      <nav>
        <h2>{this.props.welcomeMessage}</h2>
        <section>Loading...</section>
      </nav>
    );
  }
};

export default GreetingNav;
