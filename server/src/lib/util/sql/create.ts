import { getPlaceholders, getTableNameFromModelName } from ".";
import BaseModel from "../../types/base_model";
import Logs, { LogLevels } from "../logs";

export const getInsertOptions = <T, X extends T>(
    model: X
): { columnNames: string; placeholders: string; values: string[] } => {
    const notIncludedColumns = ["id", "created_on", "updated_on", "connection"];
    const values: any[] = [];

    const columnNamesArray: string[] = Object.keys(model).filter(
        (key: string) => {
            const include = notIncludedColumns.includes(key) === false;
            if (include) {
                const value = model[key as keyof T];
                if (value) {
                    values.push(value);
                    return true;
                }
            }
            return false;
        }
    );

    const placeholders = getPlaceholders(columnNamesArray);

    const columnNames = `(${columnNamesArray.join(", ")})`;

    return { columnNames, placeholders, values };
};
export const insert = <T extends BaseModel>(
    model: T
): Promise<number | boolean> => {
    return new Promise(async (resolve, reject) => {
        try {
            const { columnNames, placeholders, values } = getInsertOptions(
                model
            );
            const tableName = getTableNameFromModelName(model.constructor.name);

            const sql = `INSERT INTO ${tableName} ${columnNames} VALUES ${placeholders}`;

            const results = await model.connection.executeSqlQuery({
                sql,
                values,
            });

            await model.connection.close();

            resolve(Number(results.insertId));
        } catch (e) {
            await model.connection.close();
            Logs.addLog(e.message, LogLevels.ERROR);
        }
        reject(false);
    });
};
