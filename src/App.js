import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Link} from "react-router-dom";
import Home from './Home'
import Footer from './Footer'
import Centre from './Centres'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Route path="/home" component={Home} />
          <Route path="/centres" component={Centre} />

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
