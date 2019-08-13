import React, { Component } from "react";

import Saved from './Pages/Saved/Saved';
import Search from './Pages/Search/Search';
import Navbar from './Components/Navbar/Navbar'

import "./App.css";

class App extends Component {
  render() {
    return (
     <div>
       <Navbar />
       <Search />
     </div>
    );
  }
}

export default App;
