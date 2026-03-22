import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET" });
});

router.post("/", (req, res) => {
  res.json({ message: "POST" });
});

router.put("/", (req, res) => {
  res.json({ message: "PUT" });
});

router.delete("/", (req, res) => {
  res.json({ message: "DELETE" });
});

export default router