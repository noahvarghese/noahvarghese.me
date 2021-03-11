import SQLConnection from "../../database/sql_connection";
import fs from "fs";
import path from "path";

export const getPlaceholders = (columnNames: string[]): string => {
    const placeholdersCounter = columnNames.length;

    let placeholders = "";

    for (let i = 0; i < placeholdersCounter; i++) {
        placeholders += "?";

        if (i < placeholdersCounter - 1) {
            placeholders += ", ";
        }
    }

    return `(${placeholders})`;
};

export const getTableNameFromModelName = (modelName: string) => {
    let tableName: string = "";

    const namePieces: RegExpMatchArray = modelName.match(/[A-Z][a-z]+/g)!;

    namePieces.forEach((piece: string, index: number) => {
        tableName += piece.toLowerCase();

        if (index < namePieces.length - 1) {
            tableName += "_";
        } else {
            tableName += "s";
        }
    });

    return tableName;
};

export default async () => {
    const parentPath = "src/lib/database/";
    const files = [
        "athios_schema.sql",
        "athios_triggers.sql",
        "athios_test_data.sql",
    ];

    let allSQL: string = "";

    files.forEach((file: string) => {
        const filePath = path.resolve(parentPath + file);
        const contents = fs.readFileSync(filePath);
        allSQL += contents + " ";
    });

    const sql = new SQLConnection();
    await sql.executeSqlQuery(allSQL.toString());
    await sql.close();
};
