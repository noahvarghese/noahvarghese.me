import * as React from "React";
import "./nav.scss";
import { pages } from "../data/pages";

export const Nav = ({changeSelected, selectedPage}) => {
    return (
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
    );
};