export interface ProjectAttributes {
    name: string;
    url: string;
    tags?: string[];
    details: string | string[];
}

export const projects: ProjectAttributes[] = [
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
            "SPA without persistent data storage",
        ],
    },
    {
        name: "Todo - React",
        url: "GitHub.com/noahvarghese/todo",
        details:
            "This project is a glorified todo list. It was used to learn the basics of React. No explanation necessary as everyone and there mother has probably done one.",
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
];
