import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import UnderNav from "./UnderNav";
import Seel from './Slider'
import Testimony from './Testimonies'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <UnderNav />
          <Seel />
        <Testimony />
        <Footer />
      </div>
    );
  }
}

export default App;
