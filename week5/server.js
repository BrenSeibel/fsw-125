const express = require("express")
const app = express()

const uuid = require("uuid");
app.use(express.json());

const bountys = [
    {
      name: "Bounty Hunter",
      description: "Bounty Todo",
      imgUrl:
        "https://www.pngfind.com/pngs/m/245-2459070_bounty-hunter-applejack-https-cartoon-hd-png-download.png",
      completed: false,
      _id: uuid.v4()
    },
    {
      name: "Mr. Tree",
      description: "Bounty Todo",
      imgUrl:
        "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      completed: true,
      _id: uuid.v4()
    }
  ];

app.get("/bountys", (req, res) => {
    res.send(bountys);
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

    res.send(newbounty);
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
