const express = require("express")

const app = express()

const PORT = 5555

app.get("/hello", (req, res) => {
  res.json({ message: 'Hello World!'})
})

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`)
})