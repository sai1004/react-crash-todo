import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take Out The Trash.",
        completed: false
      },
      {
        id: 2,
        title: "Do Coding .",
        completed: false
      },
      {
        id: 3,
        title: "Time to sleep.",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
