enum SkillLevel {
    PROFICIENT = 0,
    CONVERSANT = 1,
}

interface SkillAttributes {
    name: string;
    level: SkillLevel;
}

class Skill implements SkillAttributes {
    public name: string;
    public level: SkillLevel;

    public constructor(_name: string, _level: SkillLevel) {
        this.name = _name;
        this.level = _level;
    }
}

const technical_skills = [
    new Skill("Object Oriented Programming", SkillLevel.PROFICIENT),
    new Skill("Test Driven Development", SkillLevel.PROFICIENT),
    new Skill("Test Automation", SkillLevel.PROFICIENT),
    new Skill("Web Development", SkillLevel.PROFICIENT),
    new Skill("NodeJS", SkillLevel.PROFICIENT),
    new Skill("React", SkillLevel.PROFICIENT),
    new Skill("TypeScript", SkillLevel.PROFICIENT),
    new Skill("JavaScript", SkillLevel.PROFICIENT),
    new Skill("Linux", SkillLevel.PROFICIENT),
    new Skill("HTML/CSS", SkillLevel.PROFICIENT),
    new Skill("RDBMS (MySQL, MsSQL, SQLite)", SkillLevel.PROFICIENT),
    new Skill("C", SkillLevel.CONVERSANT),
    new Skill("C# / .NET Core", SkillLevel.CONVERSANT),
    new Skill("Git", SkillLevel.CONVERSANT),
    new Skill("Go", SkillLevel.CONVERSANT),
    new Skill("SASS", SkillLevel.CONVERSANT),
    new Skill("CI/CD", SkillLevel.CONVERSANT),
    new Skill("Windows Server", SkillLevel.CONVERSANT),
    new Skill("Cloud Providers (AWS)", SkillLevel.CONVERSANT),
    new Skill(
        "AWS (S3, EC2, ElasticBeanstalk, Serverless Stack, API Gateway, RDS, Route53)",
        SkillLevel.CONVERSANT
    ),
    new Skill("Scripting (Python, PHP)", SkillLevel.CONVERSANT),
    new Skill("Shell Scripting (Bash)", SkillLevel.CONVERSANT),
];

export const conversant = technical_skills.filter(
    (skill) => skill.level === SkillLevel.CONVERSANT
);
export const proficient = technical_skills.filter(
    (skill) => skill.level === SkillLevel.PROFICIENT
);
