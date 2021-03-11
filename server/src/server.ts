import express from "express";
import cors from "cors";
import config from "./lib/config";
import router from "./lib/routes";
import authMiddleware from "./lib/middleware";
import Logs, { LogLevels } from "./lib/util/logs";
import User from "./lib/models/users";
import connectToMongoose from "./lib/models";

const app = express();

process.title = "node-server";

(async () => {
    await connectToMongoose();


    // await (User);

    app.disable("x-powered-by");

    app.use(
        cors({
            origin: process.env.DEV!
                ? "http://localhost:8080"
                : config.permalink,
        })
    );

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(authMiddleware);

    app.use("/", router);

    app.listen(config.port, async () => {
        Logs.addLog(`Server started on port: ${config.port}`, LogLevels.EVENT);
    });
})();
