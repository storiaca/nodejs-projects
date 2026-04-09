import express, { Router } from "express";
import { listProjects, getProject } from "./controller";

const projects: Router = express.Router();

projects.get("/", listProjects);
projects.get("/:id", getProject);

export default projects;
