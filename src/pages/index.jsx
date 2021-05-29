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
import { SkillLevel, technical_skills } from "../data/technical_skills";
import { interpersonal_skills } from "../data/interpersonal_skills";

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

    const conversant = technical_skills.filter((skill) => skill.level === SkillLevel.CONVERSANT);
    const proficient = technical_skills.filter(skill => skill.level === SkillLevel.PROFICIENT);

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
                    <li className={selectedPage === pages.HOME ? "selected" : ""}>
                        <a onClick={changeSelected(pages.HOME)}>Home</a>
                    </li>
                    <li className={selectedPage === pages.EXPERIENCE ? "selected" : ""}>
                        <a onClick={changeSelected(pages.EXPERIENCE)}>Experience</a>
                    </li>
                    <li className={selectedPage === pages.PROJECTS ? "selected" : ""}>
                        <a onClick={changeSelected(pages.PROJECTS)}>Projects</a>
                    </li>
                </ul>
            </nav>
            <div id="body">
                <div id="header">
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
                <div id="message">
                    <p>Hi! Welcome to my website, whether you're looking for someone to jumpstart your next venture, find out more about me, or looking to hire, feel free to look around!</p>
                </div>
                <div id="about">
                    <div id="stack">
                    <div id="education">
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <p>Adv. Diploma - Software Development</p>
                                <p>Mohawk College</p>
                                <p>2021</p>
                            </li>
                        </ul>
                    </div>
                    <div id="interpersonal">
                        <h3>Interpersonal Skills</h3>
                        <ul>{interpersonal_skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
                    </div>
                    </div>
                    <div id="technical">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>
                                <p>Proficient In:</p>
                                <ul>{proficient.map((skill, index) => <li key={index}>{skill.name}</li>)}</ul>    
                            </li>
                            <li>
                                <p>Conversant In:</p>
                                <ul>
                                    {conversant.map((skill, index) => <li key={index}>{skill.name}</li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <div id="footerContent">
                    <p>&#169; Noah Varghese 2021</p>
                </div>
            </footer>
        </main>
    );
}

export default IndexPage
