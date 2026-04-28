import { Request, Response } from "express";

export const getAllComments = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all comments" });
};
