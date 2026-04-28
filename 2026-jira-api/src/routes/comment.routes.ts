import express from "express";
import { getAllComments } from "../controllers/comment.controller.js";

export const commentRouter = express.Router();

commentRouter.get("/", getAllComments);
