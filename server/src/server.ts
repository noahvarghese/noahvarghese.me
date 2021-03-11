import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import config from "./lib/config";
import router from "./lib/routes";
import Logs, { LogLevels } from "./lib/util/logs";
import User from "./lib/models/users";
import connectToMongoose from "./lib/models";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";

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

    app.use(cookieParser());

    app.use(expressSession({
        secret: process.env.SESSION_SECRET!,
        resave: true,
        rolling: true,
        saveUninitialized: false
    }));

    app.use(passport.initialize());

    app.use(passport.session());

    passport.use("local", new LocalStrategy({ usernameField: "email" }, function (email: any, password: any, done: any) {
        User.findOne({ email }).exec((err: Error, user: any) => {
            if (err) {
                Logs.addLog(err, LogLevels.ERROR);
                return done(err);
            }

            if (!user) {
                Logs.addLog("Invalid email", LogLevels.ERROR);
                return done(null, false, { message: "Invalid login." });
            }

            const passwordValid = bcrypt.compareSync(password, user.hash);

            if (!passwordValid) {
                Logs.addLog("Invalid password", LogLevels.ERROR);
                return done(null, false, { message: "Invlaid login." });
            }

            return done(
                null,
                {
                    id: user._id
                }
            )
        })
    }));


    passport.serializeUser(function (user: any, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err: any, user: any) {
            done(err, user);
        });
    });

    app.use("/", router);

    app.listen(config.port, async () => {
        Logs.addLog(`Server started on port: ${config.port}`, LogLevels.EVENT);
    });
})();
