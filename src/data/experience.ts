export interface CustomDate {
    month:
        | "January"
        | "February"
        | "March"
        | "April"
        | "May"
        | "June"
        | "July"
        | "August"
        | "September"
        | "October"
        | "November"
        | "December";
    year: number;
}

export interface ExperienceAttributes {
    title: string;
    company: string;
    location: string;
    start_date?: CustomDate;
    end_date?: CustomDate | "Present";
    details: (string | string[])[];
    tags: string[];
}

export const experience: ExperienceAttributes[] = [
    {
        title: "Application Developer",
        company: "WebSan Solutions Inc.",
        location: "North York ON, Canada",
        start_date: { month: "January", year: 2021 },
        end_date: { month: "May", year: 2021 },
        details: [
            "Set up QA Automation framework for existing product, thereby speeding up release cycles",
            "Used Selenium Web Driver for automated browser testing and end-to-end tests",
            "Utilized Gherkin and BDD tools to increase cross team utilization",
        ],
        tags: ["Test Automation", "Cucumber"],
    },
    {
        title: "Freelance Software Developer",
        company: "EarthLoveHome",
        location: "Oakville ON, Canada",
        details: ["Custom Web Design and Development for local small business"],
        tags: ["Web Design", "Web Development"],
    },
    {
        title: "Junior Application Developer",
        company: "WebSan Solutions Inc.",
        location: "North York ON, Canada",
        start_date: {
            month: "April",
            year: 2020,
        },
        end_date: {
            month: "August",
            year: 2020,
        },
        details: [
            "Worked as part of a team of 5 to develop a cross platform mobile application using Xamarin Framework",
            "Developed leadership and presentation abilities through leading the presentation of the MVP",
            "Proposed and implemented features and solutions to enhance the user experience",
        ],
        tags: [],
    },
];
