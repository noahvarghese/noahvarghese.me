import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/Contact.css';

class Contact extends Component {

  clickSecret = (e) => {
    console.log("working");
    e.preventDefault();
  };

  render() {
    return (
        <React.Fragment>
            <footer className='contactStyle'>
              <hr className="lineStyle"/>
              <div className="containerStyle">
                <a className="resumeStyle" target="_blank" href="./assets/docs/resume2019.pdf">
                <p>Feel free to contact me!<br />Noah Varghese - <em>Developer</em></p>
                </a>
                <div className="contactContainer">
                  <a className="emailStyle" href="mailto:noah.varghese@mohawkcollege.ca">EMAIL</a>
                  <a className="phoneStyle" href="tel:+16477715777">PHONE</a>
                </div>
                <a className="imageStyle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/varghese-noah">
                <img alt="linkedin" src="./assets/img/linkedin.png"/>
                </a>
                <a className="imageStyle" target="_blank" rel="noopener noreferrer" href="https://github.com/noahvarghese">
                <img alt="github" src="./assets/img/github.png"/>
                </a>
              <Link onClick={(e) => this.clickSecret()} className="copyrightStyle" style={{display: "block", pointer:"auto"}} to="/login/">&copy; 2019 Noah Varghese</Link>
              </div>
            </footer>
        </React.Fragment>
    );
  }
}
export default Contact;
