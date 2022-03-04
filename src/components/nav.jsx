import React, { useState, useEffect } from "react";
import { globalHistory } from "@reach/router";
import { Link } from "gatsby";
import "./nav.scss";

const Nav = () => {
    const [selected, setSelected] = useState(globalHistory.location.pathname);

    useEffect(() => {
        return globalHistory.listen(({ location: { pathname } }) => {
            setSelected(pathname);
        });
    }, [setSelected]);

    return (
        <nav>
            <div id="title">
                <h1>Noah Varghese</h1>
                <h2>Software Developer</h2>
            </div>
            <ul>
                <li className={selected === "/" ? "selected" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={selected === "/experience" ? "selected" : ""}>
                    <Link to="/experience">Experience</Link>
                </li>
                <li className={selected === "/projects" ? "selected" : ""}>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
