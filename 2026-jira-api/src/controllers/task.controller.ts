import { Request, Response } from "express";

import * as taskService from "../services/task.service.js";

export const listTasks = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all tasks" });
};

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasks(req.query as any);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};
