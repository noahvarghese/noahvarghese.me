import { getTableNameFromModelName } from ".";
import User from "../../models/user";
import BaseModel from "../../types/base_model";
import Logs, { LogLevels } from "../logs";

const getReadOptions = <T, X extends T>(
    model: X,
    overridePrimaryColumn: string
): { queryBody: string; values: string[] } => {
    const values: any[] = [];

    values.push(model[overridePrimaryColumn as keyof T]);
    const queryBody = `WHERE ${overridePrimaryColumn} = ?`;

    return { queryBody, values };
};

// Takes either a model or a constructor
// If a model the model should have
export const read = <T extends BaseModel>(
    type: T | (new () => T),
    primaryColumn: string = "id"
): Promise<boolean | T[]> => {
    return new Promise(async (resolve, reject) => {
        let readOne: boolean;

        if (typeof type === "function") {
            readOne = false;
        } else if (typeof type === "object") {
            if (!type[primaryColumn as keyof T]) {
                throw new Error("No primary key value provided.");
            }
            readOne = true;
        } else {
            throw new Error("Incorrect values provided.");
        }

        const model: T = typeof type === "function" ? new type() : type;

        try {
            let returnValue: boolean | T[];

            const tableName = getTableNameFromModelName(model.constructor.name);

            let queryBody;
            let values: any[] = [];

            if (readOne) {
                const readOptions = getReadOptions(model, primaryColumn);
                queryBody = readOptions.queryBody;
                values = readOptions.values;
            }

            const sql = `SELECT * FROM ${tableName}${
                queryBody ? ` ${queryBody}` : ""
            }`;

            Logs.addLog(sql, LogLevels.DEBUG);

            const results = await model.connection.executeSqlQuery({
                sql,
                values,
            });

            if (readOne) {
                Object.assign(model, results[0]);
                returnValue = true;
            } else {
                returnValue = new Array();

                if (Array.isArray(results)) {
                    results.forEach((result) => {
                        if (Array.isArray(returnValue)) {
                            const newModel: T = new (type as new () => T)();

                            returnValue.push(Object.assign(newModel, result));
                        }
                    });
                }
            }

            await model.connection.close();
            // resolve(true);
            resolve(returnValue);
        } catch (e) {
            Logs.addLog(e.message, LogLevels.ERROR);
            reject(false);
        }
        reject(false);
    });
};
