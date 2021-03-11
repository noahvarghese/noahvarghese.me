import { Router, Request, Response } from "express";
import passport from "passport";
import Project from "../../../models/projects";

const router = Router();

router.get("/projects", async (_: Request, res: Response) => {
    const projects = await Project.find();
    res.status(200);
    res.send(projects);
});

router.get("/projects/:id", async (req: Request, res: Response) => {
    const { id } = req.query;
    const project = await Project.findById(id);
    res.status(200);
    res.send(project);
});

router.post("/projects", passport.authenticate("local"), async (req: Request, res: Response) => {
    const project = await Project.create(req.body);
    await project.save();
    res.sendStatus(200);
});

router.put("/projects/:id", passport.authenticate("local"), async (req: Request, res: Response) => {
    const { id } = req.query;
    await Project.findByIdAndUpdate(id, req.body);
    res.sendStatus(200);
});

router.delete("/projects/id", passport.authenticate("local"), async (req: Request, res: Response) => {
    const { id } = req.query;
    await Project.findByIdAndDelete(id);
    res.sendStatus(200);
});

export default router;