import React, { Component } from 'react';

import '../assets/css/Home.css';

class Home extends Component {

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
    
        return;
    }
}

export default Home;