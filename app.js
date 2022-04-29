const fs = require("fs")
const url = require("url")
const express = require("express")

const app = express()
// Middleware (btwn request and response) --------------------------------
app.use(express.json())
// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "hello from the server side!", App: "Natours" })
// })

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint...")
// })

// Routes ---------------------------------
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  })
})

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body)
  res.send("Done")
})

//Port ------------------------------------
const port = 3000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
