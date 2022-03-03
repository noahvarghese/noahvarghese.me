import * as React from "react";
import "./nav.scss";
import { pages } from "../data/pages";

export const Nav = ({ changeSelected, selectedPage }) => {
    return (
        <nav>
            <div id="title">
                <h1>Noah Varghese</h1>
                <h2>Software Developer</h2>
            </div>
            <ul>
                <li className={selectedPage === pages.HOME ? "selected" : ""}>
                    <button onClick={changeSelected(pages.HOME)}>Home</button>
                </li>
                <li
                    className={
                        selectedPage === pages.EXPERIENCE ? "selected" : ""
                    }
                >
                    <button onClick={changeSelected(pages.EXPERIENCE)}>
                        Experience
                    </button>
                </li>
                <li
                    className={
                        selectedPage === pages.PROJECTS ? "selected" : ""
                    }
                >
                    <button onClick={changeSelected(pages.PROJECTS)}>
                        Projects
                    </button>
                </li>
            </ul>
        </nav>
    );
};
