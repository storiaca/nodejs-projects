import express from "express"
import {config} from "dotenv"
import { connectDB } from "./config/db.js"

// Import Routes
import movieRoutes from "./routes/movieRoutes.js"

config()
connectDB()

const app = express()

// API Routes
app.use("/movies", movieRoutes)

const PORT = 5555

// app.get("/hello", (req, res) => {
//   res.json({ message: 'Hello World!'})
// })

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`)
})

// http://localhost:5555

// AUTH - signin, signup
// MOVIE - Getting all movies
// USER - Profile
// WATCHLIST