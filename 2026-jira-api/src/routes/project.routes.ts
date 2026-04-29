import express from "express";
import {
  getProjects,
  createProjectController,
} from "../controllers/project.controller.js";

export const projectRouter = express.Router();

projectRouter.get("/", getProjects);
projectRouter.post("/", createProjectController);
