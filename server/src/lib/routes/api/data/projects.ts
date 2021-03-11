import { Router, Request, Response } from "express";
import passport from "passport";
import Project from "../../../models/projects";
import validator from "validator";

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
    Object.entries(req.body).forEach(([key, value]) => {
        req.body[key] = validator.escape(value as string);
    });
    const project = await Project.create(req.body);
    await project.save();
    res.sendStatus(200);
});

router.put("/projects/:id", passport.authenticate("local"), async (req: Request, res: Response) => {
    const { id } = req.query;

    if (id) {
        Object.entries(req.body).forEach(([key, value]) => {
            req.body[key] = validator.escape(value as string);
        });
        await Project.findByIdAndUpdate(id, req.body);
        res.sendStatus(200);
    }
    res.sendStatus(400);
});

router.delete("/projects/id", passport.authenticate("local"), async (req: Request, res: Response) => {
    const { id } = req.query;

    if (id) {
        Object.entries(req.body).forEach(([key, value]) => {
            req.body[key] = validator.escape(value as string);
        });
        await Project.findByIdAndDelete(id);
        res.sendStatus(200);
    }
    res.sendStatus(400);
});

export default router;