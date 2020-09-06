const express = require("express")
const app = express()

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

