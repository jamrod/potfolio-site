import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Music from './Components/Music'
// import Scripts from './Components/Scripts/Scripts'
import WhoGoesFirst from './Components/WhoGoesFirst/WhoGoesFirst'
import ScaleFinder from './Components/ScaleFinder/ScaleFinder'
import Projects from './Components/Projects'

import './App.css';

function App() {
  return (
    <div className="App flex-container-column" styles={{ backgroundImage: `url(milky-way-starry-sky-night-sky-star-956981.jpeg)` }}>
      <div className="container flex-container-column">
        <Header></Header>

        <Switch>
          <Route path="/" component={Projects} exact></Route>
          <Route path="/About/" component={Home} ></Route>
          <Route path="/Music" component={Music}></Route>
          <Route path="/WhoGoesFirst/" component={WhoGoesFirst}></Route>
          <Route path="/ScaleFinder/" component={ScaleFinder}></Route>
          <Route path="/Projects/" component={Projects}></Route>
        </Switch>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
