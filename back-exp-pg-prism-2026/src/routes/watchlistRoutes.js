import express from "express";
import { addToWatchlist } from "../controllers/watchlistCotroller";

const router = express.Router();

router.post("/", addToWatchlist);


export default router
