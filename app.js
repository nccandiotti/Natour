const express = require("express")
const morgan = require("morgan")
const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")
const app = express()
// Middleware (btwn request and response) --------------------------------
app.use(morgan("dev"))
app.use(express.json())
// this middlware applies to all requests bc we did not specify a route, routes are like middleware for specified routes
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "hello from the server side!", App: "Natours" })
// })

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint...")
// })

// mounting routers - need to declare them above before they can be mounted
app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)
//Server / Port ------------------------------------
const port = 3000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
