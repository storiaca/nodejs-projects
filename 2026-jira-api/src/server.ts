import express from "express";
import cors from "cors";
import morgan from "morgan";
import { prisma } from "./lib/prisma.js";
import { taskRouter } from "./routes/task.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { projectRouter } from "./routes/project.routes.js";
import { commentRouter } from "./routes/comment.routes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Health check - also checks the database connection
app.get("/health", async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ status: "ok" });
});

// Routes
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/comments", commentRouter);

// These two always go LAST, after all routes
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});