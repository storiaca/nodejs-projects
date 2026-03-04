import express from "express";

export const taskRouter = express.Router();

taskRouter.get("/", (req, res) => {
  res.json({ tasks: [{ id: 1, title: "Task 1", completed: false }] });
});

taskRouter.post("/", (req, res) => {
  res.json({ tasks: [{ id: 2, title: "Task 2", completed: false }] });
});
