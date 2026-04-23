import { Request, Response } from "express";

import { prisma } from "../lib/prisma.js";

export const listTasks = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all tasks" });
};
