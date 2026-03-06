import express from "express";

export const taskRouter = express.Router();

taskRouter.get("/", (req, res) => {
  res.json({ tasks: [{ id: 1, title: "Task 1", completed: false }] });
});

taskRouter.post("/", (req, res) => {
  res.json({ tasks: [{ id: 2, title: "Task 2", completed: false }] });
});

taskRouter.get("/:id", (req, res) => {
  const taskId = req.params.id;
  res.json({ task: { id: taskId, title: `Task ${taskId}`, completed: false } });
});
