import mysql, {
    Connection,
    FieldInfo,
    MysqlError,
    Pool,
    QueryOptions,
} from "mysql";
import dbDetails from "../config/database";
import Logs, { LogLevels } from "../util/logs";

export default class SQLConnection {
    // protected mysql: Pool;
    protected mysql: Connection;

    constructor() {
        this.mysql = mysql.createConnection(dbDetails);
        this.mysql.connect();
        // this.mysql = mysql.createPool(dbDetails);
    }

    executeSqlQuery(query: string | QueryOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            const t = this.mysql.query(
                query,
                (error: MysqlError, results: any, fields: FieldInfo[]) => {
                    if (error) {
                        Logs.addLog(error.message, LogLevels.ERROR);
                        reject(error.message);
                    }
                    resolve(results);
                }
            );
            Logs.addLog(t.sql, LogLevels.DEBUG);
        });
    }

    close(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
            // this.mysql.end((err: MysqlError | undefined) => {
            //     if (err) {
            //         Logs.addLog(err.message, LogLevels.ERROR);
            //         reject();
            //     }
            //     resolve();
            // });
        });
    }
}
