import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import Headers from './Header';
import Card from './Card'

function App() {
  const user = {
    firstName: "justin",
    lastName: "gibbd",
    username: "Jgibbs",
  }
  // const birthday ="11/17/1989"
  return (
    <div className="App">
      {/* <Headers user={user} birthday={birthday} /> */}
    
      <Card />
    </div>
  );
}

export default App;
