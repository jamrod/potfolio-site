import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Music from './Components/Music'
import Projects from './Components/Projects'

import './App.css';

function App() {
  const history = createBrowserHistory();

  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }
  return (
    <div className="App flex-container-column" styles={{ backgroundImage: `url(milky-way-starry-sky-night-sky-star-956981.jpeg)` }}>
      <div className="container flex-container-column">
        <Header></Header>

        <Switch>
          <Route path="/" component={Projects} exact></Route>
          <Route path="/About/" component={Home} ></Route>
          <Route path="/Music" component={Music}></Route>
          <Route path="/Projects/" component={Projects}></Route>
        </Switch>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
