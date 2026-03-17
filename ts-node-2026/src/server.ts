import "source-map-support/register"
import express from "express";
import path from "path";
import { taskRouter } from "./routes/tasks";
import cors from "cors"
import morgan from "morgan"
import errorHanlder from "./middleware/errorHandler";

const app = express();

app.use(cors())
app.use(morgan("tiny"))

// Middleware
app.use(express.json());
// extend 'true' allows rich object and arrays to be encoded
app.use(express.urlencoded({ extended: true }));

// Set template engine
app.set("view engine", "ejs");
// Middleware for static files
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  // res.status(200).send("Hello world again and again!");
  // res.json({ message: "Hello World" });
  // res.download("tsconfig.json")
  res.render("index", { text: "Hello from EJS!" });
});

app.use("/tasks", taskRouter);

app.use(errorHanlder)

app.listen(4000, () => {
  console.log("Express is running on 4000 port");
});
