import express from "express";
import {
  getUsers,
  createUserController,
} from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUserController);
