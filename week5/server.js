const express = require("express")
const app = express()

app.use(Express.json)

app.get("/", (request, response) => {
    response.send({name: "brenda", age: 31})
})


app.listen(9000, () => {
    console.log("Working on port 9000")
})