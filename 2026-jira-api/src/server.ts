import express from "express";
import cors from "cors";
import morgan from "morgan";
import { taskRouter } from "./routes/task.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { projectRouter } from "./routes/project.routes.js";
import { commentRouter } from "./routes/comment.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/comments", commentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
