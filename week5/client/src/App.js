import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor (){
    super()
    this.state = {
        array : [], name:"", description:"", imgUrl:"",
    }
  } 
  
  componentDidMount(){
    axios.get("/bountys")
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
        imgUrl: this.state.imgUrl,
        id: this.state.array.length,
    }
        
    this.setState({array:[...this.state.array, newObject]})
}

edit = (event) => {
    var newObject = {
        title: this.state.title,
        description: this.state.description,
        imgurl: this.state.imgurl,
        commentsArray: [],
        id: this.state.array.length,
    }
        
    this.setState({array:[...this.state.array, newObject]})
}

deleteb = (event) => {
    console.log(event)
    
        var array = this.state.array

        console.log(array)

    const tweet = array.findIndex(tweet => tweet.id === event.target.id);
    console.log(tweet)
    array.splice(tweet, 1);
    
    console.log(array)
    this.setState({array: array})
}


  render (){
    return (
      <div className = "App"> <div style = {{display: "flex", flexDirection:"column", width:"32.5%", height:"8vw", justifyContent:"space-evenly"}}>
      <input 
          type = "text"
          name = "name"
          placeholder = "Name"
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
          name = "imgUrl"
          placeholder = "Image"
          value = {this.state.imgUrl}
          onChange = {this.handleChange}
      />
      <button onClick = {() => this.submit()}
      >Change title</button>
      </div>
  
          {this.state.array.map((bounty, index) => {

            return(
              <div>
                <h1>{bounty.name}</h1>
                <p>{bounty.description}</p>
                <img src = {bounty.imgUrl}/>
                <div style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly", maxWidth: "32.5%", height:"4vw"}}>
                            <button id={bounty.id} onClick = {(e) => this.edit(e)}>Edit</button>
                            <button id={bounty.id} onClick = {(e) => this.deleteb(e)}>Delete</button>
                          </div>
              </div>
            )
          })}
      </div>
    )
  }
}

export default App;
