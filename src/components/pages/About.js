import React, { Component } from 'react';
import '../../assets/css/About.css';

class About extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="aboutStyle">
              <h1>About</h1>
              <hr />
              <p class="about">Hello, my name is Noah Varghese.<span>I am a full stack developer based in Oakville Ontario. I'm extremely passionate about web development and design, as well as helping businesses build and improve their online presence. I enjoy programming, playing guitar, exploring and pushing the limits.</span></p>
            </div>
        </React.Fragment>
    );
  }
}

export default About;