import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor (){
    super()
    this.state = {

    }
  } 
  
  componentDidMount(){
    axios.get("/bounty3")
    .then(response => {console.log(response.data)
      this,setState({array: response.data})})
    .catch(error => console.log(error))  
  }
  render (){
    return (
      <div className = "App">

      </div>
    )
  }
}

export default App;
