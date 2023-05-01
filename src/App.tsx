import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './Count';

function App() {
  return (
    <div className="App">
       <Count initialCount={4} />
    </div>
  );
}

export default App;
