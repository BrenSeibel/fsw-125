import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import TweetsList from './TweetsList'
import Login from './Login'

const App = () => {

  return (
    <div className="App" style = {{display:"grid", gridTemplateColumns:"25% 50%"}}>

      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/tweets' component={TweetsList} />
      </Switch>

    </div>
  );
}

export default App
