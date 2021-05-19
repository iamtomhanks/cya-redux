import React from 'react';
import { Die } from './Components/Die';
import './App.css';
import { Score } from './Components/Score';

const App = ({}) => {
  return (
    <div className="app">
      <Score />
      <div className="dice-container">
        <Die curPosition={6} onClick={() => alert('dice 1')} />
        <Die curPosition={4} onClick={() => alert('dice 2')} />
        <Die curPosition={1} onClick={() => alert('dice 3')} />
      </div>
    </div>
  );
}; 

export default App;
