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
    details: string[];
}

export const experience: ExperienceAttributes[] = [
    {
        title: "IT",
        company: "Oakville Windows & Doors Inc.",
        location: "Oakville ON, Canada",
        start_date: { month: "June", year: 2020 },
        end_date: "Present",
        details: [
            "Headed the installation of desktop computers and a server to increase office capacity",
            "Implemented network configurations which boosted the network capabilities by 50%",
            "Research, identify and appraise emerging technologies, hardware, and software to provide strategic recomendations for continuous improvement",
            "Monitored and evaluated IT systems to ensure efficiency as well as the safety and security of data storage",
        ],
    },
    {
        title: "Web Developer",
        company: "Freelance",
        location: "Oakville ON, Canada",
        start_date: { month: "October", year: 2020 },
        end_date: "Present",
        details: [
            "Design, develop and host websites for small businesses",
            "Create accessible, responsive, and functional user interfaces to allow visitors on any device to have the same perfect user experience",
            "Tools used: React, NodeJS, ExpressJS, Typescript, MySQL, AWS",
        ],
    },
    {
        title: "Application Developer",
        company: "WebSan Solutions Inc.",
        location: "North York ON, Canada",
        start_date: { month: "January", year: 2021 },
        end_date: { month: "May", year: 2021 },
        details: [
            "WebSan Solutions is a certified Microsoft partner, and the larget hosting provider for Microsoft Dynamics",
            "Interface with QA and other teams to add automated integration and end to end tests to existing products",
            "Sped up SDLC as having automated tests in place helped to catch bugs before the features reached the maintenance phase",
            "Set up QA Automation framework for existing product, thereby speeding up release cycles",
            "Used Selenium Web Driver for automated browser testing and end-to-end tests",
            "Utilized Cucumber/Gherkin for cross team communication of use cases and bugs",
            "Automated testing implemented using a combination of C# / .NET Core, Selenium, SpecFlow (Cucumber), JavaScript, MsSQL",
        ],
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
            "WebSan Solutions is a certified Microsoft partner, and the larget hosting provider for Microsoft Dynamics",
            "I was brought onto an agile team of 5 that had minimal mobile development experience to create a mobile frontend for the company's ERP system",
            "Acheived an MVP that satisfied and exceeded functionality requirements",
            "Developed leadership and presentation abilities through leading the presentation of the MVP to the whole company",
            "Proposed and implemented features and solutions to enhance the user experience",
            "Tools used: C# / .NET Core, Xamarin, SQLite",
        ],
    },
];
