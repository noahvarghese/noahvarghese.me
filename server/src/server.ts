import express from "express";
import * as session from "express-session";
import { SessionData } from "./lib/types/session";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import config from "./lib/config";
import router from "./lib/routes";
import authMiddleware from "./lib/middleware";
import Logs, { LogLevels } from "./lib/util/logs";
import ResetDatabase from "./lib/util/sql";
import User from "./lib/models/user";
import LongTermCareHome, {
    createLongTermCareHomeOptions,
} from "./lib/models/long_term_care_home";
import MySQLStore from "express-mysql-session";

process.title = "athios_server";

const app = express();

(async () => {
    // Reset database here because the session creates a table after
    await ResetDatabase();

    app.disable("x-powered-by");

    app.use(
        cors({
            origin: process.env.DEV!
                ? "http://localhost:8080"
                : config.permalink,
        })
    );

    app.use(fileUpload({ createParentPath: true }));

    app.use(cookieParser());

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    const mySQLSessionStore = new (MySQLStore(session))({
        host: process.env.DB_HOST!,
        user: process.env.DB_USER!,
        password: process.env.DB_PWD!,
        database: process.env.DB_NAME!,
        port: 3306,
    });

    const createSessionTable = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            mySQLSessionStore.createDatabaseTable((err) => {
                if (err) {
                    Logs.addLog(err, LogLevels.ERROR);
                    reject(err);
                }
                resolve();
            });
        });
    };

    await createSessionTable();

    app.use(
        session.default({
            name: "sid",
            secret: process.env.SESSION_SECRET!,
            resave: true,
            rolling: true,
            saveUninitialized: false,
            cookie: {
                maxAge: 8 * 60 * 60 * 1000,
                sameSite: true,
                secure: false,
            },
            store: mySQLSessionStore,
        })
    );

    app.use(authMiddleware);

    app.use("/", router);

    app.listen(config.port, async () => {
        Logs.addLog(`Server started on port: ${config.port}`, LogLevels.EVENT);
        // User tests
        // (async () => {
        //     const user = new User({
        //         first_name: "test",
        //         last_name: "test",
        //         email: "test",
        //         role: 1,
        //         type: 1,
        //         long_term_care_home: 1,
        //     });
        //     await user.create();
        //     user.email = "test@test.com";
        //     setTimeout(async () => {
        //         await user.update();

        //         const readUser = await new User().read();
        //         console.log(readUser);
        //         setTimeout(async () => {
        //             await user.delete();
        //         }, 10000);
        //     }, 10000);
        // })();

        // long term care home tests
        // (async () => {
        //     // create
        //     const ltch = new LongTermCareHome({ name: "VARGHESE" });
        //     await ltch.create();

        //     // read
        //     let result = await ltch.read();
        //     console.log(ltch);

        //     // update
        //     ltch.address = "1245 Sixth Line";
        //     await ltch.update();
        //     console.log(ltch);

        //     // create for read multiple
        //     const ltch2 = new LongTermCareHome({ name: "TEST" });
        //     await ltch2.create();
        //     result = await ltch2.read();
        //     console.log(ltch2);

        //     // read multiple
        //     const multipleLTCHs:
        //         | LongTermCareHome[]
        //         | boolean = await new LongTermCareHome().read();

        //     if (Array.isArray(multipleLTCHs)) {
        //         multipleLTCHs.forEach((ch) => console.log(ch));
        //     }

        //     console.log(multipleLTCHs);

        //     // Delete
        //     await ltch.delete();
        //     await ltch2.delete();
        //     console.log(ltch);
        // })();
    });
})();
