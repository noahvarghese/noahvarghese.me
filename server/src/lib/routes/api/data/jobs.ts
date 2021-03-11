import { Router, Request, Response } from "express";
import Job from "../../../models/jobs";
import authMiddleware from "../../../middleware";

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

router.post("/jobs", authMiddleware, async (req: Request, res: Response) => {
    const job = await Job.create(req.body);
    await job.save();
    res.sendStatus(200);
});

router.put("/jobs/:id", authMiddleware, async (req: Request, res: Response) => {
    const { id } = req.query;
    await Job.findByIdAndUpdate(id, req.body);
    res.sendStatus(200);
});

router.delete("/jobs/id", authMiddleware, async (req: Request, res: Response) => {
    const { id } = req.query;
    await Job.findByIdAndDelete(id);
    res.sendStatus(200);
});

export default router;