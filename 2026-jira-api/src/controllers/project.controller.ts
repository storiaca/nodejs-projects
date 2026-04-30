import { Request, Response } from "express";
import { createProject } from "../services/project.service.js";

export const getProjects = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all projects" });
};

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const { name, ownerId } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const project = await createProject({ name, ownerId });

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user" });
  }
};
