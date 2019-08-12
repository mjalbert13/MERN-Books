import React, { Component } from "react";
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './Pages/Search/Search'
import Saved from './Pages/Saved/Saved'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>      
      </Router>
     
    );
  }
}

export default App;
