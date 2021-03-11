import SQLConnection from "../database/sql_connection";
import baseModel from "../types/base_model";
import { insert } from "../util/sql/create";
import { deleteObject } from "../util/sql/delete";
import { update } from "../util/sql/update";
import { read } from "../util/sql/read";

// Factory to create an empty JSON representation of the class
export const emptyUserOptions = (): UserOptions => ({
    id: undefined,
    first_name: undefined,
    last_name: undefined,
    hashed_password: undefined,
    email: undefined,
    created_on: undefined,
    updated_on: undefined,
    type: undefined,
    role: undefined,
    long_term_care_home: undefined,
});

// Factory to create a JSON representation using any parameters that match within the USerOptions type
export const createUserOptions = <T extends Partial<UserOptions>>(
    intialValues?: T
): UserOptions & T => {
    return Object.assign(emptyUserOptions(), intialValues);
};

// This defines what properties a User should have
export interface UserOptions {
    id: number | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    hashed_password: string | undefined;
    email: string | undefined;
    created_on: Date | undefined;
    updated_on: Date | undefined;
    long_term_care_home: number | undefined;
    role: number | undefined;
    type: number | undefined;
}

// This is the actual piece of the code you should use to create a new User (ex const u = new User())
export default class User implements baseModel, UserOptions {
    // This is what is used to make the queries
    connection: SQLConnection = new SQLConnection();

    // properties defined in UserOptions
    public id: number | undefined;
    public first_name: string | undefined;
    public last_name: string | undefined;
    public hashed_password: string | undefined;
    public email: string | undefined;
    public created_on: Date | undefined;
    public updated_on: Date | undefined;
    public long_term_care_home: number | undefined;
    public role: number | undefined;
    public type: number | undefined;

    // Factory to create a User object
    constructor(options?: UserOptions | any) {
        const userOptions: UserOptions = createUserOptions(options);

        Object.assign(this, userOptions);
    }

    // Create a user using the properties set in the current object
    // Need to add check for if email exists
    async create(): Promise<boolean> {
        let success = true;
        try {
            const result = await insert<User>(this);
            this.id = Number(result);
        } catch (_) {
            success = false;
        }
        return success;
    }

    // Just a wrapper to read the user into the current object based on the email set in the current object
    async readForLogin(): Promise<boolean> {
        try {
            const result = await read(this, "email");
            if (typeof result !== "boolean") {
                return true;
            } else {
                return false;
            }
        } catch (_) {
            return false;
        }
    }

    // This reads the user into the current object based on the primary key
    async read(): Promise<boolean | User[]> {
        let success: boolean = false;
        try {
            const result = await read(this.id ? this : User);
            return result;
        } catch (_) {
            success = false;
        }
        return success;
    }

    // Updates user based on properties set in current object
    async update(): Promise<boolean> {
        let success: boolean = false;
        try {
            if (this.id) {
                success = await update(this);
            }
        } catch (_) {
            success = false;
        }
        return success;
    }

    // Deletes user based on properties set in current object
    async delete(): Promise<boolean> {
        let success: boolean = false;
        try {
            if (this.id) {
                success = await deleteObject(this);
                Object.assign(this, emptyUserOptions());
            }
        } catch (_) {
            success = false;
        }
        return success;
    }
}
