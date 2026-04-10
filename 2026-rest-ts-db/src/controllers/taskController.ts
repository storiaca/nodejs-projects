import { Request, Response, NextFunction } from "express";

export const listTasks = (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const getTask = async (
  req: Request,
  res: Response,
) => {
 // throw new Error("Oops");
  res.status(200).json({ id: 1, name: "Task 1" });
};
