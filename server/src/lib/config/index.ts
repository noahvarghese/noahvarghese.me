import dotenv from "dotenv";
dotenv.config();

const dev: boolean = JSON.parse(process.env.DEV!);
const test: boolean = JSON.parse(process.env.TEST!);
let permalink: string;
let port: number = 3001;

if (dev) {
    permalink = "http://localhost:3000";
} else if (test) {
    permalink = "https://test.noahvarghese.me";
    port = 3001;
} else {
    permalink = "https://noahvarghese.me";
}

export default {
    permalink,
    port,
};
