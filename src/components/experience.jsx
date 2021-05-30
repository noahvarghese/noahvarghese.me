import * as React from "react";
import "./experience.scss";
import {Position} from "./position";
import {experience} from "../data/experience";

export const Experience = () => {
    return (
        <>
            <h3>Experience</h3>
            {experience.map((exp, index) => <Position key={index} job={exp} />)}
        </>
    );
};