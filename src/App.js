import React, { Component } from 'react';
import Navbar from './Navbar'
import {BrowserRouter} from 'react-router-dom'
import UnderNav from './UnderNav';


class App extends Component {
  
  render(){
  return (
    <div className="App">
     <Navbar/>
     <UnderNav />
    <BrowserRouter>
    </BrowserRouter>
    </div>
  );
}}

export default App;
