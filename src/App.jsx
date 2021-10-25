import './App.css';
import React, { useState } from 'react';

function App() {
  const [type, setType] = useState('batsman');
  const [runs, setRuns] = useState(0);
  const [ballsFaced, setBallsFaced] = useState(0);
  const [battingAvg, setBattingAvg] = useState(0);
  const [strikeRate, setStrikeRate] = useState(0);
  const [ballsBowled, setBallsBowled] = useState(0);
  const [bowlingAvg, setBowlingAvg] = useState(0);
  const [economy, setEconomy] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [result, setResult] = useState({ price: 0, accuracy: 0 });

  function handleSubmit(e) {
    e.preventDefault();
    const inputFields =
      type === 'batsmen'
        ? {
            t1: 'TRUE',
            t2: runs,
            t3: ballsFaced,
            t4: battingAvg,
            t5: strikeRate,
          }
        : {
            t1: 'FALSE',
            t2: ballsBowled,
            t3: bowlingAvg,
            t4: economy,
            t5: wickets,
          };
    console.log(inputFields);

    fetch('http://localhost:5000/get?' + new URLSearchParams(inputFields))
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className='App'>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='radio'
            value='batsman'
            name='type'
            checked={type === 'batsman'}
            onChange={(e) => setType('batsman')}
          />{' '}
          Batsman
          <input
            type='radio'
            value='bowler'
            name='type'
            checked={type === 'bowler'}
            onChange={(e) => setType('bowler')}
          />{' '}
          Bowler
          {type === 'batsman' ? (
            <div>
              <div className='form-group'>
                <label>
                  Runs scored
                  <input
                    type='number'
                    value={runs}
                    onChange={(e) => setRuns(e.target.value)}
                  />
                </label>
              </div>

              <div className='form-group'>
                <label>
                  Balls Faced
                  <input
                    type='number'
                    value={ballsFaced}
                    onChange={(e) => setBallsFaced(e.target.value)}
                  />
                </label>
              </div>

              <div className='form-group'>
                <label>
                  Batting Average
                  <input
                    type='number'
                    step='0.1'
                    value={battingAvg}
                    onChange={(e) => setBattingAvg(e.target.value)}
                  />
                </label>
              </div>

              <div className='form-group'>
                <label>
                  Strike Rate
                  <input
                    type='number'
                    step='0.1'
                    value={strikeRate}
                    onChange={(e) => setStrikeRate(e.target.value)}
                  />
                </label>
              </div>
            </div>
          ) : (
            <div>
              <div className='form-group'>
                <label>
                  Balls bowled
                  <input
                    type='number'
                    value={ballsBowled}
                    onChange={(e) => setBallsBowled(e.target.value)}
                  />
                </label>
              </div>

              <div className='form-group'>
                <label>
                  Bowling Average
                  <input
                    type='number'
                    step='0.1'
                    value={bowlingAvg}
                    onChange={(e) => setBowlingAvg(e.target.value)}
                  />
                </label>
              </div>

              <div className='form-group'>
                <label>
                  Economy
                  <input
                    type='number'
                    step='0.1'
                    value={economy}
                    onChange={(e) => setEconomy(e.target.value)}
                  />
                </label>
              </div>

              <div className='form-group'>
                <label>
                  Wickets
                  <input
                    type='number'
                    value={wickets}
                    onChange={(e) => setWickets(e.target.value)}
                  />
                </label>
              </div>
            </div>
          )}
          <button type='submit'>SUBMIT</button>
        </form>
        {result.price > 0 && <h3>PRICE:Rs.{result?.price}/-</h3>}
        {result.price > 0 && <h3>Accuracy{result?.accuracy}</h3>}
      </div>
    </div>
  );
}

export default App;
