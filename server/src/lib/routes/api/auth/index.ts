import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User, { createUserOptions } from "../../../models/user";
import Logs, { LogLevels } from "../../../util/logs";

const router = express.Router();

router.post("/login", async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const user: User | null = new User(createUserOptions({ email }));
    await user.readForLogin();

    let success: boolean = false;

    if (user) {
        if (user.hashed_password) {
            // console.log(bcrypt.hashSync(password, 12));
            success = bcrypt.compareSync(password, user.hashed_password);
        }

        if (!success) {
            Logs.addLog(`Invalid password attempt: ${email}`, LogLevels.ERROR);
        } else {
            request.session.user_id = user.id;
            request.session.long_term_care_home_id = user.long_term_care_home;
            response.sendStatus(200);
            return;
        }
    }

    response.sendStatus(401);
    return;
});

export default router;
