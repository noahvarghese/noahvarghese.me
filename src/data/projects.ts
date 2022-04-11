export interface ProjectAttributes {
    name: string;
    // If project is not launched, use github url here
    url?: string;
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
            "Automated testing performed in CI/CD pipeline via GitHub Actions, as well as runs via precommit hook",
            "Client written in React, utilizes functional and class based components",
            "RESTful API design",
            "API designed/documented via OpenAPI and Swagger",
            "API running on a ExpressJS/NodeJS server hosted using AWS Elastic Beanstalk",
            "MySQL database running on AWS RDS",
        ],
    },
    {
        name: "Contact API",
        github: "GitHub.com/noahvarghese/contact-api",
        details: [
            "Email service to support unauthenticated forms",
            "Utilized Golang's standard library to send templated emails on a per host basis",
            "Template and host management done via MySQL database",
            "Utlized AWS SAM CLI, Lambda, and API Gateway to create and host this in a cost effective manner",
        ],
    },
    {
        name: "@noahvarghese/get_j_opts",
        url: "npmjs.com/package/@noahvarghese/get_j_opts",
        github: "GitHub.com/noahvarghese/get_j_opts",
        details: [
            "NPM package providing validation of JSON object",
            "Demonstrates basic comprehension of open source licensing as evidenced by usage of software licensed under the MIT license",
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
            "Utilized React Storybook to document components",
        ],
    },
    {
        name: "Restaurant Locator",
        github: "GitHub.com/noahvarghese/restaurant",
        details: [
            "Single page application using vanilla JS, HTML and CSS",
            "Consumes Yelp's RESTful API",
            "Parses and displays JSON data",
            "Utilizes browsers geolocation API or user input to get user's location",
        ],
    },
    {
        name: "CryptoTool",
        github: "GitHub.com/noahvarghese/cryptoTool",
        details: [
            "Web API to encrypt/decrypt a string using OpenSSL",
            "Written in PHP",
            "Rewritten in Ruby on Rails",
        ],
    },
    {
        name: "VPN Configuration Generator",
        github: "GitHub.com/noahvarghese/vpnConfigGen",
        details: [
            "Automate generation of OpenVPN configuration files",
            "Web API with frontend",
            "Written in PHP and Bash, with a MySQL database",
        ],
    },
    {
        name: "Authentication API",
        github: "GitHub.com/noahvarghese/userApi",
        details: [
            "Utilizes JSON Web Tokens (JWTs) to share security info (instead of cookies)",
            "API that provides CRUD operations on a user object, with autentication routes",
            "Written in PHP with a MySQL database",
        ],
    },
];
