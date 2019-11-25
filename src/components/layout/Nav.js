import React, { Component } from 'react';
import '../../assets/css/Nav.css';

class Nav extends Component {

    clickAbout(e) {
        e.preventDefault();
        let welcome = document.getElementsByClassName("animateText")[0];
        let experience = document.getElementsByClassName("experienceStyle")[0];
        let about = document.getElementsByClassName("aboutStyle")[0];
        welcome.style.display = "none";
        experience.style.display = "none";
        about.style.display = "block";
        about.style.opacity = "1";
        this.props.changeNavigation();
    }

    clickExperience(e) {
        e.preventDefault();
        let welcome = document.getElementsByClassName("animateText")[0];
        let experience = document.getElementsByClassName("experienceStyle")[0];
        let about = document.getElementsByClassName("aboutStyle")[0];
        welcome.style.display = "none";
        about.style.display = "none";
        experience.style.display = "block";
        this.props.changeNavigation();
    }

  render() {
    return (
        <React.Fragment>
            <nav >
                <ul >
                    <li>
                        <a href="./" id="about" onClick={(e) => this.clickAbout(e)}>ABOUT</a>
                    </li>
                    <li>
                        <a href="./" id="experience" onClick={(e) => this.clickExperience(e)}>EXPERIENCE</a>
                    </li>
                </ul>
            </nav>

        </React.Fragment>
    );
  }
}

export default Nav;
