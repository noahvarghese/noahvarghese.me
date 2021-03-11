import express, { Request, Response } from "express";
import auth from "./auth";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
    res.send("HIII");
});
router.use("/auth", auth);
export default router;
