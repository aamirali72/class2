import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
    <div className="App">
      <Dinner dishNAme="Chiken Biyani with Raita" sweetdish="kheer" />
      <Dinner dishNAme="Chiken Biyani with Onion" sweetdish="Jalabi" />
      <Dinner dishNAme="Chiken Biyani with Saled" sweetdish="Gajar ka halwa" />
    </div>

  );
}

export default App;


// http://bouncy-parent.surge.sh/