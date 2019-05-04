const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

app.get("/", (req,res) => res.send({

    message: `Hello ${req.query.name}. Your favorite color is ${req.query.color} and your favorite food is ${req.query.food}. This is weird, those are my favorites too!`}))

app.listen(port, () => console.log(`Example app listening on port ${port}`))

