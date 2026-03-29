import express from "express";
import {
  addToWatchlist,
  removeFromWatchlist,
  updateWatchlistItem,
} from "../controllers/watchlistCotroller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addToWatchlistSchema } from "../validators/watchlistValidators.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);

// DELETE: {{baseUrl}}/watchlist/:id
router.delete("/:id", removeFromWatchlist);

// UPDATE: {{baseUrl}}/watchlist/:id
router.put("/:id", updateWatchlistItem);

export default router;
