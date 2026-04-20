import express, { Router } from "express";
import {
  listProjects,
  getProject,
  listProjectTasks,
} from "../../../controllers/projectController.js";
import authenticateUser from "../../../middleware/authenticate-user.js";

const projects: Router = express.Router();

projects.use(authenticateUser);

projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
