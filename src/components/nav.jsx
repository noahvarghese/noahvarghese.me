import React, { useState, useEffect } from "react";
import { globalHistory } from "@reach/router";
import { Link } from "gatsby";
import MenuIcon from "../images/MenuIcon.svg";
import MenuOpenIcon from "../images/MenuOpenIcon.svg";
import "./nav.scss";

// Must be ordered largest to smallest
const Breakpoints = {
    XL: 1536,
    LG: 1200,
    MD: 900,
    SM: 600,
    XS: 0,
};
const Sizes = Object.keys(Breakpoints);

const NavLinks = ({ selected }) => {
    return (
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
    );
};

const Nav = () => {
    const [selected, setSelected] = useState(globalHistory.location.pathname);
    // One of 'XL', 'LG', 'MD', 'SM', 'XS
    const [size, setSize] = useState();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const resize_window = () => {
            // Must be ordered largest to smallest
            for (let i = 0; i < Sizes.length; i++) {
                const current = window.innerWidth;
                const breakpoint = Breakpoints[Sizes[i]];

                if (current > breakpoint) {
                    setSize(Sizes[i]);
                    return;
                }
            }

            // If not found, then set the smallest breakpoint
            setSize(Sizes[Sizes.length - 1]);
        };
        resize_window();

        window.addEventListener("resize", resize_window);

        return () => {
            window.removeEventListener("resize", resize_window);
        };
    }, []);

    useEffect(() => {
        return globalHistory.listen(({ location: { pathname } }) => {
            setSelected(pathname);
        });
    }, [setSelected]);

    useEffect(() => {
        if (Sizes.indexOf(size) < Sizes.indexOf("MD") && menuOpen) {
            setMenuOpen(false);
        }
    }, [size, menuOpen, setMenuOpen]);

    return (
        <nav>
            <div id="title">
                <h1>Noah Varghese</h1>
                <h2>Software Developer</h2>
            </div>
            <div
                style={{
                    display:
                        // if the current size is medium or smaller
                        Sizes.indexOf(size) >= Sizes.indexOf("MD")
                            ? "none"
                            : "flex",
                }}
            >
                <NavLinks selected={selected} />
            </div>
            <div
                style={{
                    display:
                        // if the current size is medium or smaller
                        Sizes.indexOf(size) >= Sizes.indexOf("MD")
                            ? "block"
                            : "none",
                }}
            >
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </button>
            </div>
        </nav>
    );
};

export default Nav;
