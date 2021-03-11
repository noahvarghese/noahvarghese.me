export default interface DBConnection {
    host: string;
    user: string;
    password: string;
    database: string;
    multipleStatements: boolean;
    // connectionLimit: number;
}
