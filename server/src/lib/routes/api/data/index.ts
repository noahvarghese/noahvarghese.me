import { Router } from "express";
import jobs from "./jobs";
import projects from "./projects";

const router = Router();

router.use("/jobs", jobs);
router.use("/projects", projects);

export default router;