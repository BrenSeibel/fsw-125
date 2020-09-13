const express = require("express")
const app = express()

const uuid = require("uuid");
app.use(express.json());

const todos = [
    {
      name: "Grocery Shopping",
      description: "go to walmart",
      dueDate: 09202019,
      completed: false,
      _id: uuid.v4()
    },
    {
      name: "Wash the car",
      description: "todo Todo",
      dueDate: 09202019,
      completed: false,
      _id: uuid.v4()
    },
    {
      name: "Order from Amazon",
      description: "todo Todo",
      dueDate: 09202019,
      completed: false,
      _id: uuid.v4()
    },
    
  ];

app.get("/todos", (req, res) => {
    res.status(201).send(todos);
});

app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const todo = todos.find(todo => todo._id === id);
    let error;
    console.log(todos);
    if(!todos) {
      res.status(404);
      next((error = new Error("Not Found ID in Database")));
    } else {
      res.status(200).send(todos)
    }
});

app.get("/todos/search/completed", (req, res) => {
  const query = req.query.completed;
  console.log(query);
  const todo = todos.find(todo => todo.completed == query);
  res.status(200).send(todo);
});

app.post("/todos", (req, res) => {
    const newtodo = req.body;
    newtodo._id = uuid.v4();
    todos.push(newtodo);

    res.status(201).send(newtodo);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = todos.findIndex(todo => todo._id === id);
  const updatedtodo = Object.assign(todos[index], req.body);
  res.status(201).send(updatedtodo);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = todos.findIndex(todo => todo._id === id);
  // const updatedtodo = Object.assign(todos[index], req.body);
  res.status(200).send(`Deleted entry`);
  todos.splice(index, 1);
});

app.use((err, req, res, next) => {
  console.log(err);
  console.log(res.statusCode);
  if (res.statusCode!== 404) {
    res.status(500);
  }
  return res.send({ errMsg: err.message});
  });

app.listen(9000, () => {
    console.log("Working on port 9000")
})