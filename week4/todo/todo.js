











const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());

const todos = [
    {
      name: "Luke Skywalker",
      description: "This is my first to do",
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
  
  app.get("/todos", (req, res) => {
      res.send({ todos});
  });

  app.get("/todos/:id", (req, res) => {
      const id = req.params.id;
      console.log(id);
      const todo = todos.find(todo => todo._id === id);
      res.send(todo);
  });

  app.post("/todos", (req, res) => {
      const newTodo = req.body;
      newTodo._id = uuid.v4();
      todos.push(newTodo);

      res.send(`Posted: Your new todo has been added to the list of todos`);
  });

  app.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const index = todos.findIndex(todo => todo._id === id);
    const updatedtodo = Object.assign(todos[index], req.body);
    res.send(updatedtodo);
});

  app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const index = todos.findIndex(todo => todo._id === id);
    // const updatedtodo = Object.assign(todos[index], req.body);
    res.send(`Deleted entry`);
    todos.splice(index, 1);
});


app.listen(3030, () => {console.log("runninginport3030")});