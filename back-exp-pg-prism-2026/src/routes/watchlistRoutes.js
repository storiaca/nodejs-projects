import express from "express";
import { addToWatchlist } from "../controllers/watchlistCotroller.js";

const router = express.Router();

router.post("/", addToWatchlist);


export default router
