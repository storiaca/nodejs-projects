// const express = require("express");
import express from "express";

const app = express();

app.use(express.json());

app.get("/api/auth/signup", (req, res) => {
  res.send("Signup endpoint");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Login endpoint");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Logout endpoint");
});

app.listen(4000, () => console.log("Server is running on port 4000"));
