import * as React from "react";
import Me from "../images/Me.png";
import Home from "../images/ic_home_24px.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/Github.png";
import Email from "../images/ic_email_24px.png";
import "./about.scss";

const About = () => {
    return (
        <div id="about">
            <div id="info">
                <ul>
                    <li>
                        <div className="infoImgContainer">
                            <img alt="My hometown" src={Home} />
                        </div>
                        <p>Oakville ON, Canada</p>
                    </li>
                    <li>
                        <div className="infoImgContainer">
                            <img alt="My GitHub" src={Github} />
                        </div>
                        <a
                            href="https://github.com/noahvarghese"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub.com/noahvarghese
                        </a>
                    </li>
                    <li>
                        <div className="infoImgContainer">
                            <img alt="My LinkedIn" src={Linkedin} />
                        </div>
                        <a
                            href="https://linkedin.com/in/varghese-noah"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn.com/in/varghese-noah
                        </a>
                    </li>
                    <li>
                        <div className="infoImgContainer">
                            <img alt="My email" src={Email} />
                        </div>
                        <a
                            href="mailto:varghese.noah@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            varghese.noah@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
            <div id="me">
                <img src={Me} alt="Noah Varghese" />
            </div>
        </div>
    );
};

export default About;
