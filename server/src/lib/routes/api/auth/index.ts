import express, { Request, Response } from "express";
import Logs, { LogLevels } from "../../../util/logs";

const router = express.Router();

router.post("/login", async (request: Request, response: Response) => {
    return;
});

export default router;
