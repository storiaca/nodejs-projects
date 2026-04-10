import express, { Router } from "express";
import { listProjects, getProject, listProjectTasks } from "../../../controllers/projectController";

const projects: Router = express.Router();

projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
