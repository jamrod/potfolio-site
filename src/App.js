import React from 'react';
import { Route, Switch, redirect } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import QuickLinks from './Components/QuickLinks'
import Music from './Components/Music'
// import Scripts from './Components/Scripts/Scripts'
import WhoGoesFirst from './Components/WhoGoesFirst/WhoGoesFirst'
import ScaleFinder from './Components/ScaleFinder/ScaleFinder'
import Projects from './Components/Projects'

import './App.css';

function App() {
  return (
    <div className="App flex-container-column" styles={{ backgroundImage: `url(milky-way-starry-sky-night-sky-star-956981.jpeg)` }}>
      <Header></Header>

      <Switch>
        <div className="grid">
          <QuickLinks></QuickLinks>
          <div className="viewer">
            <Route path="/" component={Projects} exact></Route>
            <Route path="/About/" component={Home} ></Route>
            {/* <Route path="/Scripts" component={Scripts}></Route> */}
            <Route path="/Music" component={Music}></Route>
            <Route path="/WhoGoesFirst/" component={WhoGoesFirst}></Route>
            <Route path="/ScaleFinder/" component={ScaleFinder}></Route>
            <Route path="/Projects/" component={Projects}></Route>
          </div>
        </div>

      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
