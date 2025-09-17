// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
