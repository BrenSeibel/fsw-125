const express = require("express")
const app = express()
const thingFinders = require ("thingFinder")

const uuid = require("uuid");
app.use(express.json());


app.get("/thingFinder", (req, res) => {
    res.send(thingFinders);
});

app.get("/thingFinder/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const thingFinder = thingFinders.find(thingFinder => thingFinder._id === id);
    res.send(thingFinder);
});

app.listen(9000, () => {console.log("server is running in port 9000")})