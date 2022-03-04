import * as React from "react";
import "../fonts/Montserrat/Montserrat.css";
import "../fonts/Roboto/Roboto.css";
import "./index.scss";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import { Nav } from "../components/nav";
import About from "../components/about";
import { proficient, conversant } from "../data/technical_skills";
import interpersonal_skills from "../data/interpersonal_skills";

const IndexPage = () => {
    return (
        <>
            <header>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>Noah Varghese</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    ></meta>
                </Helmet>
                <Nav />
            </header>
            <main>
                <About />
                <div id="message">
                    <p>
                        Hi! Welcome to my website, whether you're looking for
                        someone to jumpstart your next venture, find out more
                        about me, or looking to hire, feel free to look around!
                    </p>
                </div>
                <div id="skills">
                    <div id="stack">
                        <div id="education">
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <p>Adv. Diploma - Software Development</p>
                                    <p>Mohawk College</p>
                                    <p>2022</p>
                                </li>
                            </ul>
                        </div>
                        <div id="interpersonal">
                            <h3>Interpersonal Skills</h3>
                            <ul>
                                {interpersonal_skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div id="technical">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>
                                <p>Proficient In:</p>
                                <ul>
                                    {proficient.map((skill, index) => (
                                        <li key={index}>{skill.name}</li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <p>Conversant In:</p>
                                <ul>
                                    {conversant.map((skill, index) => (
                                        <li key={index}>{skill.name}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default IndexPage;
