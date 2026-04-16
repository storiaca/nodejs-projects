import express, { Router } from "express";
import { listTasks, getTask } from "../../../controllers/taskController.js";
import authenticateUser from "../../../middleware/authenticate-user.js";

const tasks: Router = express.Router();

tasks.use(authenticateUser)
tasks.get("/", listTasks);
tasks.get("/:id", getTask);

export default tasks;
