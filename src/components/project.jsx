import * as React from "react";
import "./project.scss";
import WWW from "../images/ic_public_24px.png";

export const Project = ({ project }) => {
    return (
        <div className="project">
            <div className="proj-header">
                <h4 className="proj-name">{project.name}</h4>
                <div className="proj-url-container">
                    <div className="proj-url-img-container">
                        <img alt="globe symbolizing world wide web" src={WWW} />
                    </div>
                    <h4 className="proj-url">
                        <a href={`https://${project.url}`}>{project.url}</a>
                    </h4>
                </div>
                {project.tags ? (
                    <h4 className="tags">{project.tags.join(" | ")}</h4>
                ) : null}
            </div>
            {Array.isArray(project.details) ? (
                <ul className="details">
                    {project.details.map((d) => (
                        <li>{d}</li>
                    ))}
                </ul>
            ) : (
                <p className="details">{project.details}</p>
            )}
        </div>
    );
};
