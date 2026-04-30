import { Request, Response } from "express";
import { createUser } from "../services/user.service.js";
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-]{2,}$/;

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).json({ message: "List all users" });
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await createUser({ email, name });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
