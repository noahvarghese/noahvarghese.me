import * as React from "React";
import { SkillLevel, technical_skills } from "../data/technical_skills";
import { interpersonal_skills } from "../data/interpersonal_skills";
import "./home.scss";

export const HomeComponent = () => {
    const conversant = technical_skills.filter((skill) => skill.level === SkillLevel.CONVERSANT);
    const proficient = technical_skills.filter(skill => skill.level === SkillLevel.PROFICIENT);

    return (
        <>
            <div id="message">
                <p>Hi! Welcome to my website, whether you're looking for someone to jumpstart your next venture, find out more about me, or looking to hire, feel free to look around!</p>
            </div>
            <div id="about">
                <div id="stack">
                    <div id="education">
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <p>Adv. Diploma - Software Development</p>
                                <p>Mohawk College</p>
                                <p>2021</p>
                            </li>
                        </ul>
                    </div>
                    <div id="interpersonal">
                        <h3>Interpersonal Skills</h3>
                        <ul>{interpersonal_skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
                    </div>
                </div>
                <div id="technical">
                    <h3>Technical Skills</h3>
                    <ul>
                        <li>
                            <p>Proficient In:</p>
                            <ul>{proficient.map((skill, index) => <li key={index}>{skill.name}</li>)}</ul>    
                        </li>
                        <li>
                            <p>Conversant In:</p>
                            <ul>
                                {conversant.map((skill, index) => <li key={index}>{skill.name}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}