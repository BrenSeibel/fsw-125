const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());

const todos = [
    {
      name: "Grocery Shopping",
      description: "go to Walmart",
      dueDate: 09202019,
      completed: false,
      _id: uuid.v4()
    },
    {
      name: "Wash the car",
      description: "todo Todo",
      dueDate: 09202020,
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
      const newtodo = req.body;
      newtodo._id = uuid.v4();
      todos.push(newtodo);

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