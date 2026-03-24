import express from "express"

import { connectDB, disconnectDB } from "./config/db.js"

// Import Routes
import movieRoutes from "./routes/movieRoutes.js"

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

// Handle unhandled promise rejections (e.g. database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err)
  server.close(async () => {
    await disconnectDB()
    process.exit(1)
  })
})

// Handle uncaught exceptions
process.on("uncaughtException", async(err) => {
  console.error("Uncaught Exception:", err)
  await disconnectDB()
  process.exit(1)
})

// Graceful shutdown
process.on("SIGTERM", async() => {
  console.log("SIGTERM rev=ceived, shutting down gracefully")
  sever.close(async() => {
    await disconnectDB()
    process.exit(1)
  })
})


// http://localhost:5555

// AUTH - signin, signup
// MOVIE - Getting all movies
// USER - Profile
// WATCHLIST