import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Music from './Components/Music'
import Projects from './Components/Projects'
import Nav from './Components/Nav'
import NoMatch from './Components/NoMatch'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'Projects'
    }
  }

  setActive = (str) => {
    if (!str) {
      str = 'Projects'
    }
    if (this.state.active !== str) {
      this.setState({ active: str })
    }
  }

  render() {
    return (
      <div className="App flex-container-column">
        <div className="container flex-container-column">
          <Header></Header>
          <Nav active={this.state.active}></Nav>
          <Switch>
            <Route path="/" exact render={props => <Projects setActive={this.setActive} state={props} />} />
            <Route path="/About/" render={props => <Home setActive={this.setActive} state={props} />} />
            <Route path="/Music" render={props => <Music setActive={this.setActive} state={props} />} />
            <Route path="/Projects/" render={props => <Projects setActive={this.setActive} state={props} />} />
            <Route path="/" render={props => <NoMatch setActive={this.setActive} state={props} />} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
