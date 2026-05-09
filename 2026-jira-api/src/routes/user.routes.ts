import express from "express";
import {
  getUsers,
  createUserController,
} from "../controllers/user.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createUserSchema } from "../validators/user.validator.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", validateRequest(createUserSchema), createUserController);
