import express from "express";
import cors from "cors";
import morgan from "morgan";
import { taskRouter } from "./routes/task.routes.js";
import { userRouter } from "./routes/user.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
