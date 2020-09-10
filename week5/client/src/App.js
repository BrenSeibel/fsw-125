import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor (){
    super()
    this.state = {
        array : []
    }
  } 
  
  componentDidMount(){
    axios.get("/bountys")
    .then(response => {console.log(response.data)
      this.setState({array: response.data})})
    .catch(error => console.log(error))  
  }
  render (){
    return (
      <div className = "App">
          {this.state.array.map((bounty, index) => {

            return(
              <div>
                <h1>{bounty.name}</h1>
                <p>{bounty.description}</p>
                <img src = {bounty.imgUrl}/>
              </div>
            )
          })}
      </div>
    )
  }
}

export default App;
