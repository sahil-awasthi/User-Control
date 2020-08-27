import React, { Component } from 'react';
import './App.css';
import Users from './Users'

class App extends Component {
  state = {
    name: ["sahil"],
    dummy: ''
  }

  nameHandler = (event) => {
    this.setState({
      dummy: event.target.value
    })
    console.log(this.state.dummy);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: this.state.name.concat(this.state.dummy)
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <Users
          dummy={this.state.dummy}
          name={this.state.name}
          nameEntered={this.nameHandler}
          handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
