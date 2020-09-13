import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor (){
    super()
    this.state = {
        array : [], name:"", description:"", dueDate:"",
    }
  } 
  
  componentDidMount(){
    axios.get("/todos")
    .then(response => {console.log(response.data)
      this.setState({array: response.data})})
    .catch(error => console.log(error))  
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
    console.log(e.target)
  }

  submit = () => {
    var newObject = {
        name: this.state.name,
        description: this.state.description,
        dueDate: this.state.dueDate,
        // id: this.state.array.length,
    }
       axios.post("/todos", newObject).then(res => {
         this.setState({array:[...this.state.array, res.data]})
       })
    
}

edit = (event) => {
    var newObject = {
        title: this.state.title,
        description: this.state.description,
        dueDate: this.state.dueDate,
        commentsArray: [],
        id: this.state.array.length,
    }
        
    this.setState({array:[...this.state.array, newObject]})
}

deleteb = (event) => {
    console.log(event)
    
        var array = this.state.array

        console.log(array)

    const tweet = array.findIndex(tweet => tweet.id === event.target.className);
    console.log(tweet)
    array.splice(tweet, 1);

    console.log(event.target.className)

    console.log(array)
    axios.delete("/todos/" + event.target.className).then(res => {
      this.setState({array: array})
    })
    for(var i = 0; i < document.getElementsByClassName(event.target.className).length; i++)
    {document.getElementsByClassName(event.target.className)[i].remove()}
}


  render (){
    return (
      <div className = "App"> <div style = {{display: "flex", flexDirection:"column", width:"32.5%", height:"8vw", justifyContent:"space-evenly"}}>
        <h1>Brenda's To Do App</h1>
      <input 
          type = "text"
          name = "name"
          placeholder = "To do Errand"
          value = {this.state.name}
          onChange = {this.handleChange}
      />
       <input 
          type = "text"
          name = "description"
          placeholder = "Description"
          value = {this.state.description}
          onChange = {this.handleChange}
      />
       <input 
          type = "text"
          name = "dueDate"
          placeholder = "Due Date"
          value = {this.state.dueDate}
          onChange = {this.handleChange}
      />
      <button onClick = {() => this.submit()}
      >Add To Do</button>
      </div>
  
          {this.state.array.map((todo, index) => {

            return(
              <div>
                <h1>{todo.name}</h1>
                <p>{todo.description}</p>
                <p>{todo.dueDate}</p>
                <div style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly", maxWidth: "32.5%", height:"4vw"}}>
                            <button className={todo._id} onClick = {(e) => this.edit(e)}>Edit</button>
                            <button className={todo._id} onClick = {(e) => this.deleteb(e)}>Delete</button>
                          </div>
              </div>
            )
          })}
      </div>
    )
  }
}

export default App;
