import express from "express";
import { listTasks } from "../controllers/task.controller.js";

export const taskRouter = express.Router();

taskRouter.get("/", listTasks);
