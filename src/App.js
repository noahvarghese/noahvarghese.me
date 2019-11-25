import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/layout/Nav'
import HamburgerMenu from './components/layout/HamburgerMenu'
import Welcome from './components/pages/Welcome';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Contact from './components/layout/Contact';

import Login from './components/pages/Login';

import './App.css';

class App extends Component {

  audio;

  componentDidMount = () => {
    this.audio = document.getElementById("audio");
  }
  
  stopAnimation = () => {
    clearTimeout(this.displayAbout);
    clearTimeout(this.displayWelcome);
    if(document.getElementById("audio")) {
      this.audio.parentNode.removeChild(this.audio);
    }
  }
  
  render = () => {
    let displayWelcome = setTimeout(() => {
      let fadeOut = setInterval(() => {

        let animateText = document.getElementsByClassName("animateText")[0];
        if (!animateText.style.opacity) {
          animateText.style.opacity = 1;
        }
        if (animateText.style.opacity > 0) {
          animateText.style.opacity -= 0.25;
        } else {
          animateText.style.display = "none";
          clearInterval(fadeOut);
        }
      }, 200);
    }, 6000);

    let displayAbout = setTimeout(() => {
        let aboutText = document.getElementsByClassName("aboutStyle")[0];
        let animateText = document.getElementsByClassName("animateText")[0];
        if(animateText.style.display !== "none") {

          aboutText.style.display = "block";
        }
        aboutText.style.opacity = 1;
    }, 7000);
    return (
      <Router>
        <div className="App">
          <Route path="/" render={props => (
            <React.Fragment>
              <Nav changeNavigation={this.stopAnimation.bind(displayWelcome, displayAbout)}/>
              <HamburgerMenu changeNavigation={this.stopAnimation.bind(displayWelcome, displayAbout)}/>
              <Welcome />
              <About />
              <Experience />
              <Contact changeNavigation={this.stopAnimation.bind(displayWelcome, displayAbout)}/>
            </React.Fragment>
          )} />
          <Route path="/login" render={props => (
            <Login />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
