import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor (){
    super()
    this.state = {
        array : [], name:"", description:"", dueDate:"", editToggle: false,
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
        name: this.state.name,
        description: this.state.description,
        dueDate: this.state.dueDate,
        // commentsArray: [],
        // id: this.state.array.length,
    }
    var array = this.state.array
    const todo = array.findIndex(todo => todo.id === event.target.className);
    console.log(todo)
    
  
    axios.put("/todos/" + event.target.className, newObject).then(res => {
      const updatedtodo = Object.assign(array[todo], res.data);
      console.log(updatedtodo)
      console.log(array)
      this.setState({array: array})
    })
}

deleteb = (event) => {
    console.log(event)
    
        var array = this.state.array

        console.log(array)

    const todo = array.findIndex(todo => todo.id === event.target.className);
    console.log(todo)
    array.splice(todo, 1);

    console.log(event.target.className)

    console.log(array)
    axios.delete("/todos/" + event.target.className).then(res => {
      this.setState({array: array})
    })
    for(var i = 0; i < document.getElementsByClassName(event.target.className).length; i++)
    {document.getElementsByClassName(event.target.className)[i].remove()}
}

setEditToggle =(toggle)=>{
  this.setState({editToggle: toggle})

}


  render (){
    return (
      <div className = "App"> 
      <div style = {{display: "flex", flexDirection:"column", width:"32.5%", height:"8vw", justifyContent:"space-evenly", marginBottom: 50}}>
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
                { !this.state.editToggle  ?
                <div>
                <h1>{todo.name}</h1>
                <p>{todo.description}</p>
                <p>{todo.dueDate}</p>
                <div style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly", maxWidth: "32.5%", height:"4vw"}}>
                <button className={todo._id} onClick = {(e) => this.deleteb(e)}>Delete</button>
                <button className={todo._id} onClick = {(e) => this.setEditToggle(true)}>Edit</button>
                </div>
                </div>
                :
                <div>
      <input 
          type = "text"
          name = "name"
          placeholder = "To do Errand"
          value = {todo.name}
          onChange = {this.handleChange}
      />
       <input 
          type = "text"
          name = "description"
          placeholder = "Description"
          value = {todo.description}
          onChange = {this.handleChange}
      />
       <input 
          type = "text"
          name = "dueDate"
          placeholder = "Due Date"
          value = {todo.dueDate}
          onChange = {this.handleChange}
      />
      <button onClick = {() => this.edit()}
      >Add Changes</button>
      <button onClick = {() => { this.setEditToggle(false)}}  >Closed</button>
      </div>
      }
                            
                          
              </div>
            )
          })}
    
      </div>
    )
  }
}

export default App;
