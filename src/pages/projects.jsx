import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/about";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Project from "../components/project";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <>
            <header>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>Noah Varghese &middot; Projects</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    ></meta>
                </Helmet>
                <Nav />
            </header>
            <main>
                <About />
                <h3>Projects</h3>
                {projects ? (
                    projects.map((proj, index) => (
                        <div key={"project" + index} className="entry">
                            <Project project={proj} />
                        </div>
                    ))
                ) : (
                    <h4>Coming Soon</h4>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Projects;
