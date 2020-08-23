const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());

const bountys = [
    {
      name: "Noah Seibel",
      description: "Bounty Todo",
      imgUrl:
        "http://images4.fanpop.com/image/photos/17500000/cool-background-random-17506456-1869-1168.jpg",
      completed: false,
      _id: uuid.v4()
    },
    {
      name: "Leia Organa",
      description: "Second to do",
      imgUrl:
        "http://3.bp.blogspot.com/-4qBPxRh9C0U/TtxJbdIPfWI/AAAAAAAAAqc/DZ-5uaRHSnw/s1600/rainbow-wallpaper-hd-3-765147.jpg",
      completed: true,
      _id: uuid.v4()
    }
  ];
  
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


app.listen(3030, () => {console.log("runninginport3030")});