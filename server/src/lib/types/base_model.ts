import SQLConnection from "../database/sql_connection";

export default interface BaseModel {
    connection: SQLConnection;
    create: () => Promise<boolean>;
    read: () => Promise<any[] | any>;
    update: () => Promise<boolean>;
    delete: () => Promise<boolean>;
}
