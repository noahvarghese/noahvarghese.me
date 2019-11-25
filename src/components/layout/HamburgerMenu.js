import React, { Component } from 'react';
import Contact from './Contact';
import '../../assets/css/HamburgerMenu.css';

class HamburgerMenu extends Component {

    toggleNav() {
        document.getElementsByClassName("hamburgerContainer")[0].classList.toggle("change");
        document.getElementsByClassName("nav")[0].classList.toggle("showNav");
        document.getElementsByClassName("contactStyle")[0].classList.toggle("display");
    }

    childClicked(e) {
        e.stopPropagation();
        this.toggleNav();
    }

    clickAbout(e) {
        e.preventDefault();
        let welcome = document.getElementsByClassName("animateText")[0];
        let experience = document.getElementsByClassName("experienceStyle")[0];
        let about = document.getElementsByClassName("aboutStyle")[0];
        welcome.style.display = "none";
        experience.style.display = "none";
        about.style.display = "block";
        about.style.opacity = "1";
        this.toggleNav();
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
        this.toggleNav();
        this.props.changeNavigation();
    }

    render() {
        return (
            <React.Fragment>
                    <div className="hamburgerContainer" onClick={this.toggleNav}>
                        <div className="bar1" onClick={this.childClicked.bind(this)}></div>
                        <div className="bar2" onClick={this.childClicked.bind(this)}></div>
                        <div className="bar3" onClick={this.childClicked.bind(this)}></div>
                    </div>
                    <div className="nav">
                        <div className="navLinks">
                            <a href="./" id="about" onClick={(e) => this.clickAbout(e)}>ABOUT</a>
                            <a href="./" id="experience" onClick={(e) => this.clickExperience(e)}>EXPERIENCE</a>
                        </div>
                        <Contact />
                    </div>
            </React.Fragment>
        );
    }
}

export default HamburgerMenu;