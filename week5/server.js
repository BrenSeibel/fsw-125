const express = require("express")
const app = express()

app.use(Express.json)

app.get("/bountys", (req, res) => {
    res.send({ bountys});
});

app.get("/bountys/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const bounty = bountys.find(bounty => bounty._id === id);
    res.send(bounty);
});

app.post("/bountys", (req, res) => {
    const newbounty = req.body;
    newbounty._id = uuid.v4();
    bountys.push(newbounty);

    res.send(`Posted: Your new bounty has been added to the list of bountys`);
});

app.put("/bountys/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = bountys.findIndex(bounty => bounty._id === id);
  const updatedbounty = Object.assign(bountys[index], req.body);
  res.send(updatedbounty);
});

app.delete("/bountys/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = bountys.findIndex(bounty => bounty._id === id);
  // const updatedbounty = Object.assign(bountys[index], req.body);
  res.send(`Deleted entry`);
  bountys.splice(index, 1);
});

app.listen(9000, () => {
    console.log("Working on port 9000")
})