import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SnowStorm from 'react-snowstorm';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Leap from './components/Leap';
import Workshop from './components/Workshop';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = './TweenMax.js';
    // script.async = true;
    // script.onload = () => this.scriptLoaded();
    // document.body.appendChild(script);
  }

  // scriptLoaded() {
  //   window.A.sort();
  // }

  componentWillMount() {
    // let timeline = new TimelineMax({
    //     repeat: -1,
    //     yoyo: true
    //   }),
    //   feTurb = document.querySelector('#feturbulence');
    // timeline.add(
    //   TweenMax.to(feTurb, 15, {
    //     onUpdate: function() {
    //       let bfX = this.progress() * 0.005 + 0.015, //base frequency x
    //         bfY = this.progress() * 0.05 + 0.1; //base frequency y
    //       feTurb.setAttribute('baseFrequency', `${bfX} ${bfY}`);
    //     }
    //   }),
    //   0
    // );
  }

  render() {
    return (
      <div className="App">
        <SnowStorm followMouse={false} snowCharacter="o" />
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/leap" component={Leap} />
            <Route path="/workshop" component={Workshop} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
