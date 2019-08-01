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
      console.log(userData);
      this.setState({users : userData});
    })
  };

  render() {
    return (
      <main>
        <GreetingNav welcomeMessage = "Four Legs or Fly"/>
        {this.state.users.map(user => {
          return <RenderUser firstName={user.name.first} lastName={user.name.last} imageUrl = {user.picture.large}/>
        })}
      </main>
    );
  }
};

export default App;
