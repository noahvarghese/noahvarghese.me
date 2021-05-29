import * as React from "react"
import "../fonts/Montserrat/Montserrat.css";
import "../fonts/Roboto/Roboto.css";
import "./index.scss";
import Me from "../images/Me.png";
import Home from "../images/ic_home_24px.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/Github.png";
import Email from "../images/ic_email_24px.png";
import {Helmet } from "react-helmet";

const pages = {
    HOME: "/",
    EXPERIENCE: "/experience",
    PROJECTS: "/projects"
}

const IndexPage = () => {
    const [selectedPage, changeSelectedPage] = React.useState(pages.HOME);

    const changeSelected = (page) => (e) => {
        e.preventDefault();
        changeSelectedPage(page);
    }

    return (
        <main>
            <Helmet>
                <meta charset="utf-8"/>
                <title>Noah Varghese</title>
            </Helmet>
            <nav>
                <div id="title">
                    <h1>Noah Varghese</h1>
                    <h2>Software Developer</h2>
                </div>
                <ul>
                    <li className={selectedPage == pages.HOME ? "selected" : ""}>
                        <a onClick={changeSelected(pages.HOME)}>Home</a>
                    </li>
                    <li className={selectedPage == pages.EXPERIENCE ? "selected" : ""}>
                        <a onClick={changeSelected(pages.EXPERIENCE)}>Experience</a>
                    </li>
                    <li className={selectedPage == pages.PROJECTS ? "selected" : ""}>
                        <a onClick={changeSelected(pages.PROJECTS)}>Projects</a>
                    </li>
                </ul>
            </nav>
            <div id="body">
                <div id="info">
                    <ul>
                        <li>
                            <div className="infoImgContainer">
                                <img alt="My hometown" src={Home}/>
                            </div>
                            <p>Oakville ON, Canada</p>
                        </li>
                        <li>
                            <div className="infoImgContainer">
                                <img alt="My GitHub" src={Github}/>
                            </div>
                            <a href="https://github.com/noahvarghese" target="_blank" rel="noreferrer">GitHub.com/noahvarghese</a>
                        </li>
                        <li>
                            <div className="infoImgContainer">
                                <img alt="My LinkedIn" src={Linkedin}/>
                            </div>
                            <a href="https://linkedin.com/in/varghese-noah" target="_blank" rel="noreferrer">LinkedIn.com/in/varghese-noah</a>
                        </li>
                        <li>
                            <div className="infoImgContainer">
                                <img alt="My email" src={Email}/>
                            </div>
                            <a href="mailto:varghese.noah@gmail.com" target="_blank" rel="noreferrer">varghese.noah@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div id="me">
                    <img src={Me} alt="a picture of me" />
                </div>
            </div>
        </main>
    );
}

export default IndexPage
