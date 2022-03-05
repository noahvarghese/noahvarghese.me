import * as React from "react";
import Calendar from "../images/ic_date_range_24px.png";
import LocationPin from "../images/ic_place_24px.png";
import "./position.scss";

export const Position = ({ job }) => {
    let PeriodComponent = null;
    const createPeriodComponent = (jobPeriodSpan) => (
        <div className="job-period-container">
            <div className="job-img-container">
                <img alt="calendar icon" src={Calendar} />
            </div>
            <div className="job-period">{jobPeriodSpan}</div>
        </div>
    );

    if (job.start_date) {
        let jobPeriodSpan = `${job.start_date.month} ${job.start_date.year} - `;

        if (job.end_date === "Present") {
            jobPeriodSpan += job.end_date;
        } else {
            jobPeriodSpan += `${job.end_date.month} ${job.end_date.year}`;
        }

        PeriodComponent = createPeriodComponent(jobPeriodSpan);
    }

    return (
        <div className="position">
            <div className="job-header">
                <h4 className="job-title">{job.title}</h4>
                <h4 className="company">{job.company}</h4>
            </div>
            <div className="job-data">
                {PeriodComponent}
                <div className="job-location-container">
                    <div className="job-img-container">
                        <img alt="location pin" src={LocationPin} />
                    </div>
                    <p>{job.location}</p>
                </div>
            </div>
            <ul className="job-details">
                {job.details.map((detail, index) => {
                    if (Array.isArray(detail)) {
                        return (
                            <li key={index}>
                                <ul>
                                    {detail.map((det, index) => (
                                        <li key={`${index}00${index}`}>
                                            {det}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    } else {
                        return <li key={index}>{detail}</li>;
                    }
                })}
            </ul>
        </div>
    );
};
