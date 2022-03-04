import * as React from "react";
import "./project.scss";
import "../styles/entry.scss";
import WWW from "../images/ic_public_24px.png";
import GH from "../images/Github.png";

export const Project = ({ project }) => {
    return (
        <div className="project entry">
            <div className="proj-header">
                <h4 className="proj-name">{project.name}</h4>
                <div className="proj-url-container">
                    <div className="proj-url-img-container">
                        <img alt="globe symbolizing world wide web" src={WWW} />
                    </div>
                    <h4 className="proj-url">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://${project.url}`}
                        >
                            {project.url}
                        </a>
                    </h4>
                </div>
                {project.github ? (
                    <div className="proj-url-container">
                        <div className="proj-url-img-container">
                            <img
                                alt="globe symbolizing world wide web"
                                src={GH}
                            />
                        </div>
                        <div>
                            {Array.isArray(project.github) ? (
                                project.github.map((g, i) => (
                                    <h5 className="proj-url" key={"GitHub" + i}>
                                        <a
                                            target="_blank"
                                            href={`https://${g}`}
                                            rel="noopener noreferrer"
                                        >
                                            {g}
                                        </a>
                                    </h5>
                                ))
                            ) : (
                                <h5 className="proj-url">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://${project.github}`}
                                    >
                                        {project.github}
                                    </a>
                                </h5>
                            )}
                        </div>
                    </div>
                ) : null}
                {project.tags ? (
                    <h4 className="tags">{project.tags.join(" | ")}</h4>
                ) : null}
            </div>
            {Array.isArray(project.details) ? (
                <ul className="details">
                    {project.details.map((d, i) => (
                        <li key={project.name + "details" + i}>{d}</li>
                    ))}
                </ul>
            ) : (
                <p className="details">{project.details}</p>
            )}
        </div>
    );
};
