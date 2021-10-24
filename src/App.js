import "./App.css";
import React, { useState } from "react";

function App() {
  const [type, setType] = useState("");
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const [avg, setAvg] = useState(0);
  const [strikeRate, setStrikeRate] = useState(0);

  function handleSubmit() {
    console.log("Submitted");
  }

  return (
    <div className="App">
      <div> 
        <form onSubmit={handleSubmit}>
          <input type="radio" value={type} name="type" onChange={(e) => setType("batsman")} /> Batsman
          <input type="radio" value={type} name="type" onChange={(e) => setType("bowler")}/> Bowler

          <div className="form-group">
            <label>
              Runs
              <input
                type="number"
                value={runs}
                onChange={(e) => setRuns(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Balls
              <input
                type="number"
                value={balls}
                onChange={(e) => setBalls(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Average
              <input
                type="number"
                step="0.1"
                value={avg}
                onChange={(e) => setAvg(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Strike Rate
              <input
                type="number"
                step="0.1"
                value={strikeRate}
                onChange={(e) => setStrikeRate(e.target.value)}
              />
            </label>
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
