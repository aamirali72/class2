import React from 'react';
import './App.css';
import Daughters from './Daughters.js';


function App() {
  return (
    <div className="App">
      <Daughters Hername="Ayman" HerClass="IV" />
      <Daughters Hername="Sarah" HerClass="V" />
      <Daughters Hername="Aiza" HerClass="IV" />
      <Daughters Hername="Sameya" HerClass="Kinder Garden" />
    </div>

  );
}

export default App;


// http://bouncy-parent.surge.sh/