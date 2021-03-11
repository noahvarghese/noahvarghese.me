// import SQLConnection from "../database/sql_connection";

// export default interface BaseModel {
//     connection: SQLConnection;
//     create: () => Promise<boolean>;
//     read: () => Promise<any[] | any>;
//     update: () => Promise<boolean>;
//     delete: () => Promise<boolean>;
// }

import mongoose from "mongoose";
import dotenv from "dotenv";
import Logs, { LogLevels } from "../util/logs";
dotenv.config();


const connectToMongoose = async () => {
    const { DB_NAME, DB_HOST, DB_USER, DB_PWD } = process.env;

    const uri = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(uri, { w: "majority", useNewUrlParser: true, useUnifiedTopology: true });
        Logs.addLog("Connected to database.", LogLevels.EVENT);
    } catch (e) {
        Logs.addLog(e.message, LogLevels.ERROR);
        throw new Error("Failed to connect to database.")
    }
};

export default connectToMongoose;