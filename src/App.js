
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import Switch from 'react-router-dom';
import {  BrowserRouter as Router,
  } from 'react-router-dom';
 import { Switch, Route } from "react-router-dom";


export   class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <Switch>
        <Route  exact path="/about"> <News pageSize={this.pageSize} country="in" category="Home"/></Route>
        <Route  exact path="/business">< News pageSize={this.pageSize} country="in" category="business"/></Route>
        <Route  exact path="/entertainment">< News pageSize={this.pageSize} country="in" category="entertainment"/></Route>
        <Route  exact path="/general">< News pageSize={this.pageSize} country="in" category="general"/></Route>
        <Route  exact path="/health" ><News pageSize={this.pageSize} country="in" category="health"/></Route>
        <Route  exact path="/science">< News pageSize={this.pageSize} country="in" category="science"/></Route>
        <Route  exact path="/sports">< News pageSize={this.pageSize} country="in" category="sports"/></Route>
        <Route  exact path="/technology"><News pageSize={this.pageSize} country="in" category="technology"/></Route>
  
        </Switch>
        </Router>
      </div>
    )
  }
}
export default App
