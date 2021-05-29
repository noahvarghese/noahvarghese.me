export enum SkillLevel {
    PROFICIENT = 0,
    CONVERSANT = 1,
}

export interface SkillAttributes {
    name: string;
    level: SkillLevel;
}

export class Skill implements SkillAttributes {
    public name: string;
    public level: SkillLevel;

    public constructor(_name: string, _level: SkillLevel) {
        this.name = _name;
        this.level = _level;
    }
}

export const technical_skills = [
    new Skill("Object Oriented Programming", SkillLevel.PROFICIENT),
    new Skill("Test Driven Development", SkillLevel.PROFICIENT),
    new Skill("Behaviour Driven Development", SkillLevel.PROFICIENT),
    new Skill("Test Automation", SkillLevel.PROFICIENT),
    new Skill("Web Design", SkillLevel.PROFICIENT),
    new Skill("Web Development", SkillLevel.PROFICIENT),
    new Skill("C# / .NET Core", SkillLevel.PROFICIENT),
    new Skill("NodeJS", SkillLevel.PROFICIENT),
    new Skill("React", SkillLevel.PROFICIENT),
    new Skill("TypeScript", SkillLevel.PROFICIENT),
    new Skill("JavaScript", SkillLevel.PROFICIENT),
    new Skill("Cucumber", SkillLevel.PROFICIENT),
    new Skill("Linux", SkillLevel.PROFICIENT),
    new Skill("HTML", SkillLevel.PROFICIENT),
    new Skill("CSS", SkillLevel.PROFICIENT),
    new Skill("Git", SkillLevel.PROFICIENT),
    new Skill("SQL", SkillLevel.PROFICIENT),
    new Skill("PHP", SkillLevel.CONVERSANT),
    new Skill("Python", SkillLevel.CONVERSANT),
    new Skill("Bash", SkillLevel.CONVERSANT),
    new Skill("SASS", SkillLevel.CONVERSANT),
    new Skill("AWS", SkillLevel.CONVERSANT),
];
