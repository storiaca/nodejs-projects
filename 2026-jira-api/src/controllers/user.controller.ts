import { Request, Response } from "express";
import { createUser } from "../services/user.service.js";

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all users" });
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await createUser({ email, name });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
