import express from "express";

const app = express();

// Set template engine
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  // res.status(200).send("Hello world again and again!");
  // res.json({ message: "Hello World" });
  // res.download("tsconfig.json")
  res.render("index")
});

app.listen(4000, () => {
  console.log("Express is running on 4000 port");
});
