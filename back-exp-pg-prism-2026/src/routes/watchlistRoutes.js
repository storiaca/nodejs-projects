import express from "express";
import { addToWatchlist, removeFromWatchlist } from "../controllers/watchlistCotroller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware)

router.post("/", addToWatchlist);

// {{bseUrl}}/watchlist/:id
router.delete("/:id", removeFromWatchlist)

export default router
