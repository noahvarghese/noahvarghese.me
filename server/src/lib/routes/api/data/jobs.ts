import { Router, Request, Response } from "express";
import Job from "../../../models/jobs";
import passport from "passport";
import validator from "validator";

const router = Router();

router.get("/jobs", async (_: Request, res: Response) => {
    const jobs = await Job.find();
    res.status(200);
    res.send(jobs);
});

router.get("/jobs/:id", async (req: Request, res: Response) => {
    const { id } = req.query;
    const job = await Job.findById(id);
    res.status(200);
    res.send(job);
});

router.post("/jobs", passport.authenticate("local"), async (req: Request, res: Response) => {
    Object.entries(req.body).forEach(([key, value]) => {
        req.body[key] = validator.escape(value as string);
    });
    const job = await Job.create(req.body);
    await job.save();
    res.sendStatus(200);
});

router.put("/jobs/:id", passport.authenticate("local"), async (req: Request, res: Response) => {
    const { id } = req.query;
    if (id) {
        Object.entries(req.body).forEach(([key, value]) => {
            req.body[key] = validator.escape(value as string);
        });
        await Job.findByIdAndUpdate(id, req.body);
        res.sendStatus(200);
    }
    res.sendStatus(400);
});

router.delete("/jobs/:id", passport.authenticate("local"), async (req: Request, res: Response) => {
    const { id } = req.query;
    if (id) {
        await Job.findByIdAndDelete(id);
        res.sendStatus(200);
    }
    res.send(400);
});

export default router;