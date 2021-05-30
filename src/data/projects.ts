export interface ProjectAttributes {
    name: string;
    url: string;
    tags: string[];
    details: string | string[];
}

export const projects: ProjectAttributes[] = [
    {
        name: "CryptoTool",
        url: "GitHub.com/noahvarghese/cryptoTool",
        tags: [
            "Web Development",
            "Automation",
            "PHP",
            "Ruby on Rails",
            "OpenSSL",
        ],
        details:
            "This is an internal tool meant to discourage the storage of plain text passwords in code. It encrypts/decrypts a string using the OpenSSL library. It was originally written in PHP, but migrated to Ruby On Rails so that I could do a comparison between the languages and try out Ruby. The app can be accessed manually via the web page, or automated via its API",
    },
    {
        name: "VPN Configuration Generator",
        url: "GitHub.com/noahvarghese/vpnConfigGen",
        tags: [
            "Web Development",
            "Automation",
            "PHP",
            "Bash",
            "OpenVPN",
            "MySQL",
        ],
        details:
            "This is a tool that could be used internally or externally. The purpose is to generate new configuration files for a client to connect to an OpenVPN server. It has a login page (user must be registered internally), and requires client details to map the configuration to a particular user and machine. All user details and user machine details are stored in a MySQL database. The PHP script calls a bash script to interact with the OpenVPN tools. The reason this was developed is there was a group project in school, where we hosted the code on my local server, and my classmates needed to be able to access it. Generating the configurations manually was tedious, so, I automated it! The process went from 15-20 minutes, to 1 minute, or no time at all if the user had an account setup already.",
    },
    {
        name: "Authentication API",
        url: "GitHub.com/noahvarghese/userApi",
        tags: ["WebDevelopment", "PHP", "MySQL", "JSON Web Tokens"],
        details:
            "This project's purpose was to learn about the usage of Json Web Tokens (JWTs). It provided basic CRUD functionality for a user object, as well as login and register capabilities. Utilized FireBase's JWT package to create and read the Json Web Tokens.",
    },
    {
        name: "Vue Grading App",
        url: "GitHub.com/noahvarghese/vue-grading-app",
        tags: ["Web Development", "Vue", "SASS"],
        details:
            "This project was to be as simple a Vue app as possible. No NPM packages required. (Though I did cheat and add one so that I could learn SASS). It allows the user to enter grades. It is a simple SPA, so there is no database integrated to store the data.",
    },
    {
        name: "Todo - React",
        url: "GitHub.com/noahvarghese/todo",
        tags: ["Web Development", "React"],
        details:
            "This project is a glorified todo list. It was used to learn the basics of React. No explanation necessary as everyone and there mother has probably done one.",
    },
    {
        name: "Restaurant Locator",
        url: "GitHub.com/noahvarghese/restaurant",
        tags: ["Web Development", "HTML", "CSS", "JavaScript"],
        details:
            "This project is a SPA. It takes the users location (either via the browser's geolocation API, or via user input) as well as a radius to search within. It then queries Yelp's API to locate restaurants within the users radius. It returns the results in a user friendly format, and provides some information such as the rating, address, and phone number of the restaurant.",
    },
];
