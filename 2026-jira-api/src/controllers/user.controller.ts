import { Request, Response } from "express";

import { prisma } from "../lib/prisma.js";

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all users" });
};
