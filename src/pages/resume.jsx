import React from "react";
import { useCallback } from "react";
import { Helmet } from "react-helmet";
import About from "../components/about";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { Position } from "../components/position";
import Project from "../components/project";
import { experience } from "../data/experience";
import interpersonal_skills from "../data/interpersonal_skills";
import { projects } from "../data/projects";
import { proficient, conversant } from "../data/technical_skills";
import "./resume.scss";

const Resume = () => {
    const print = useCallback(() => {
        if (typeof window !== undefined) {
            window.print();
        }
    }, []);

    return (
        <>
            <header>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>Noah Varghese &middot; Resum&eacute;</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    ></meta>
                </Helmet>
                <Nav />
            </header>
            <main>
                <About />
                <div id="instructions">
                    <p>Generate a printable resum&eacute; in PDF format.</p>
                    <p>
                        Check all options you would like to appear on the pdf,
                        then click 'Generate'.
                    </p>
                    <button onClick={print}>Generate</button>
                </div>
                <div id="resume">
                    <div id="main">
                        <div id="experience">
                            <h3>Experience</h3>
                            {experience.map((exp, index) => (
                                <div
                                    key={"position" + index}
                                    className="select"
                                >
                                    <input
                                        type="checkbox"
                                        defaultChecked={true}
                                    />
                                    <Position job={exp} />
                                </div>
                            ))}
                        </div>
                        <div id="projects">
                            <h3>Projects</h3>
                            {projects.map((proj, index) => (
                                <div key={"proj" + index} className="select">
                                    <input
                                        type="checkbox"
                                        defaultChecked={true}
                                    />
                                    <Project project={proj} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="secondary">
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
                        <div id="interpersonal">
                            <h3>Interpersonal Skills</h3>
                            <ul>
                                {interpersonal_skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Resume;
