import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Saved from './Pages/Saved/Saved';
import Search from './Pages/Search/Search';
import Navbar from './Components/Navbar/Navbar';

import "./App.css";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <Switch>
          <Navbar />
          <Route exact path ="/" component={Search} />
          <Route exact path = "/saved" component={Saved} />
        </Switch>
          <Search />
      </div>
    </Router>
    );
  }
}

export default App;
