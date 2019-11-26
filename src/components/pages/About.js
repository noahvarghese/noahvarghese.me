import React, { Component } from 'react';
import '../../assets/css/About.css';

class About extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="aboutStyle">
              <h1>About</h1>
              <hr />
              <p>My name is Noah Varghese. <span>I am a full stack developer with a passion for web design and development. I'm looking to help businesses build and improve their online presence. My passions are programming, playing guitar, exploring and pushing the limits.</span></p>
            </div>
        </React.Fragment>
    );
  }
}

export default About;