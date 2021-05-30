import * as React from "react";
import "./projects.scss";
import {Project} from "./project";
import {projects} from "../data/projects";

export const Projects = () => {
    return (
        <>
            <h3>Projects</h3>
            

            {projects ? projects.map((proj, index) => <Project key={index} project={proj} />) : <h4>Coming Soon</h4>}
        </>
    );
};