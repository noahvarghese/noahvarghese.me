import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/about";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { Position } from "../components/position";
import { experience } from "../data/experience";

const Experience = () => {
    return (
        <>
            <header>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>Noah Varghese &middot; Experience</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    ></meta>
                </Helmet>
                <Nav />
            </header>
            <main>
                <About />
                <h3>Experience</h3>
                {experience.map((exp, index) => (
                    <Position key={index} job={exp} />
                ))}
            </main>
            <Footer />
        </>
    );
};

export default Experience;
