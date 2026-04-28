import { Request, Response } from "express";

export const listTasks = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all tasks" });
};
