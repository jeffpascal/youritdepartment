import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    fetch("http://localhost:4000/")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        // console.log(myJson)
        this.setState({
          data: myJson
        });
      });
  }

  render() {
    const { data } = this.state;
    return <div>{data}</div>;
  }
}

export default App;
