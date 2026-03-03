import express from "express";
import path from "path"

const app = express();

// Set template engine
app.set("view engine", "ejs");
// Middleware for static files
app.use(express.static(path.join(__dirname, "..", "public")))

app.get("/", (req, res) => {
  // res.status(200).send("Hello world again and again!");
  // res.json({ message: "Hello World" });
  // res.download("tsconfig.json")
  res.render("index", { text: "Hello from EJS!" });
});

app.listen(4000, () => {
  console.log("Express is running on 4000 port");
});
