import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/about";
import Footer from "../components/footer";
import Nav from "../components/nav";
import "./resume.scss";

const Resume = () => {
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
                    <button onClick={window.print}>Generate</button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Resume;
