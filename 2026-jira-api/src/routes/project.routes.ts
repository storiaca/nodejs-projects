import express from "express";
import { getProjects } from "../controllers/project.controller.js";

export const projectRouter = express.Router();

projectRouter.get("/", getProjects);
