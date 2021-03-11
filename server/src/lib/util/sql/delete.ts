import { getTableNameFromModelName } from ".";
import BaseModel from "../../types/base_model";
import Logs, { LogLevels } from "../logs";

const getDeleteOptions = <T, X extends T>(
    model: X
): { queryBody: string; values: string[] } => {
    const values: any[] = [model["id" as keyof T]];
    const queryBody = "WHERE id = ?";

    return { queryBody, values };
};

export const deleteObject = <T extends BaseModel>(
    model: T
): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        if (model["id" as keyof T]) {
            try {
                const { queryBody, values } = getDeleteOptions(model);
                const tableName = getTableNameFromModelName(
                    model.constructor.name
                );

                const sql = `DELETE FROM ${tableName} ${queryBody}`;
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
        }
        reject(false);
    });
};
