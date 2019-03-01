import React, { Component } from 'react';


import {Frame} from "./components/index"
import {Routes} from "./pages/routes"

class App extends Component {
  render() {
    console.log(Frame)
    return (
      <Frame>{Routes}</Frame>
    )
  }
}

export default App;
