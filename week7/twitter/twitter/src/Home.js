  
import React from 'react';
import './App.css'
import TweetsList from './TweetsList.js';
import WithAuth from './AuthProvider';

const Home = () => {
  return (
    <div>
      <h1> Home </h1>
      <TweetsList/>
    </div>
  );

  
}

export default Home