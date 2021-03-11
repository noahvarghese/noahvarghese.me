import { getTableNameFromModelName } from ".";
import BaseModel from "../../types/base_model";
import Logs, { LogLevels } from "../logs";

const getUpdateOptions = <T, X extends T>(
    model: X
): { queryBody: string; values: string[] } => {
    const notIncludedColumns = ["id", "created_on", "updated_on", "connection"];
    const values: any[] = [];

    let queryBody: string = "SET ";

    const columnNamesArray = Object.keys(model).filter((key: string) => {
        const include = notIncludedColumns.includes(key) === false;
        if (include) {
            const value = model[key as keyof T];
            if (value) {
                values.push(value);
                return true;
            }
            return false;
        }
    });

    queryBody += columnNamesArray.join(" = ?, ");
    queryBody += " = ? WHERE id = ?";
    values.push(model["id" as keyof T]);

    return { queryBody, values };
};

export const update = <T extends BaseModel>(model: T): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        try {
            const { queryBody, values } = getUpdateOptions(model);
            const tableName = getTableNameFromModelName(model.constructor.name);

            const sql = `UPDATE ${tableName} ${queryBody}`;
            Logs.addLog(sql, LogLevels.DEBUG);

            await model.connection.executeSqlQuery({
                sql,
                values,
            });

            await model.connection.close();
            resolve(true);
        } catch (_) {
            reject(false);
        }
    });
};
