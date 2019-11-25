import React, { Component } from 'react';
import '../../assets/css/About.css';

class About extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="aboutStyle">
              <h1>About</h1>
              <hr />
              <br />
              <p>Noah found his passion for computers after high school. It wasn’t until he was studying business at McMaster that he got his first computer. As soon as he saw his first terminal and entered his first commands using the Bash shell, he was hooked.</p>
              <br />
              <p>Not long after, he fell down the rabbit hole that was GNU/Linux, compiled his first kernel, and discovered he wanted to pursue software development and computer science as a career.</p>
            </div>
        </React.Fragment>
    );
  }
}

export default About;