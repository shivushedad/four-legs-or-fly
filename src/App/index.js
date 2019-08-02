import React, {Component} from "react";
import GreetingNav from "./components/greeting-nav";
import getRandomUsers from "./services/fetch-users";
import RenderUser from "./components/render-user";

class App extends Component {
  state = {
    users : []
  };
  componentDidMount() {
    getRandomUsers.then(userData => {
      this.setState({users : userData});
    })
  };

  handleOnClickDiv = (e) => {
    console.log("Removing " + e)
    const newState = this.state.users.filter(user => user.name.first !== e)
    this.setState({users: newState});
  }

  render() {
    return (
      <main>
        <header>
        <GreetingNav welcomeMessage = "Four Legs or Fly"/>
        <hr/>
        </header>
        { this.state.users.length < 1 ? "Loading..." :
          this.state.users.map(user => {
          return <RenderUser firstName={user.name.first} lastName={user.name.last} imageUrl = {user.picture.large} uniqueId = {user.name.first} handleOnClick={this.handleOnClickDiv} username={user.login.username}/>
        })}
      </main>
    );
  }
};

export default App;
