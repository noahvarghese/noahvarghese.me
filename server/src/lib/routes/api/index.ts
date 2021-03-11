import express, { Request, Response } from "express";
import auth from "./auth";
import data from "./data";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
    res.send("HIII");
});
router.use("/auth", auth);
router.use("/data", data);
export default router;
