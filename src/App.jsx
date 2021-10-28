import React, { useState } from 'react';
import BowlerForm from './Components/BowlerForm';
import BatsmenForm from './Components/BatsmenForm';
import './App.css';
import { GiCricketBat } from 'react-icons/gi';
import { BiBaseball } from 'react-icons/bi';
function App(props) {
  const [type, setType] = useState(true);
  //true==>batsmen
  //false==>bowlers
  return (
    <div className='container'>
      <h1>Auction Price Prediction</h1>
      <div className='toggle-btn-container'>
        <p className='toggle-btn-label'>{type ? 'BATSMEN' : 'BOWLER'}</p>
        <div className='toggle-btn' onClick={() => setType((p) => !p)}>
          <div data-is-public={type}>
            {type ? <GiCricketBat /> : <BiBaseball />}
          </div>
        </div>
      </div>
      {type ? <BatsmenForm /> : <BowlerForm />}
    </div>
  );
}

export default App;
