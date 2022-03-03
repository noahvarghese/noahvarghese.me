export interface ProjectAttributes {
    name: string;
    // If project is not launched, use github url here
    url: string;
    github?: string | string[];
    tags?: string[];
    details: string | string[];
}

export const projects: ProjectAttributes[] = [
    {
        name: "OnBoard",
        url: "capstone.noahvarghese.me",
        github: [
            "GitHub.com/noahvarghese/capstone-server",
            "GitHub.com/noahvarghese/capstone-client",
        ],
        details: [
            "WORK IN PROGRESS",
            "Paperless employee onboarding tool targeted at small businesses/restaurants",
            "Full stack web app",
            "Decoupled client and server both written in TypeScript",
            "Automated testing performed in CI/CD pipeline via GitHub Actions",
            "Client written in react, utilizes functional and class based components",
            "Utilizes React's Context API",
            "Uses Material UI component library",
            "RESTful API design",
            "API designed/documented via OpenAPI and Swagger",
            "API running on a ExpressJS/NodeJS server hosted using AWS Elastic Beanstalk",
            "MySQL database running on AWS RDS",
            "Utilized Test Driven Development (TDD)",
            "Both client and server use Jest to provide unit testing",
        ],
    },
    {
        name: "@noahvarghese/react-components",
        url: "npmjs.com/package/@noahvarghese/react-components",
        github: "GitHub.com/noahvarghese/react-components",
        details: [
            "NPM package providing reusable React components",
            "Peaked at 790 downloads for the week of September 9th 2021 - September 15th 2021",
            "Used to learn NPM",
            "Implemented custom theming system using CSS preprocessor SCSS",
            "Utilized React Storybook to document and test components in isolation or together",
        ],
    },
    {
        name: "Restaurant Locator",
        url: "GitHub.com/noahvarghese/restaurant",
        details: [
            "Single page application using vanilla JS, HTML and CSS",
            "Consumes Yelp's RESTful API",
            "Parses and displays JSON data",
            "Utilizes browsers geolocation API or user input to get user's location",
        ],
    },
    {
        name: "CryptoTool",
        url: "GitHub.com/noahvarghese/cryptoTool",
        details: [
            "Web API to encrypt/decrypt a string using OpenSSL",
            "Written in PHP",
            "Rewritten in Ruby on Rails",
        ],
    },
    {
        name: "VPN Configuration Generator",
        url: "GitHub.com/noahvarghese/vpnConfigGen",
        details: [
            "Automate generation of OpenVPN configuration files",
            "Web API with frontend",
            "Written in PHP and Bash, with a MySQL database",
        ],
    },
    {
        name: "Authentication API",
        url: "GitHub.com/noahvarghese/userApi",
        details: [
            "Utilizes JSON Web Tokens (JWTs) to share security info (instead of cookies)",
            "API that provides CRUD operations on a user object, with autentication routes",
            "Written in PHP with a MySQL database",
        ],
    },
    {
        name: "Vue Grading App",
        url: "GitHub.com/noahvarghese/vue-grading-app",
        details: [
            "Basic Vue app without usage of NPM or vue-cli",
            "Explores state management",
            "Provides a server to serve the HTML page",
        ],
    },
    {
        name: "Todo - React",
        url: "GitHub.com/noahvarghese/todo",
        details: [
            "Basic React APP using create-react-app",
            "Basic state management",
        ],
    },
];
