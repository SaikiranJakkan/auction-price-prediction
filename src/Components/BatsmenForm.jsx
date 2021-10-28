import { useState } from 'react';
import styles from './styles.module.css';
const BatsmenForm = () => {
  const [runs, setRuns] = useState(0);
  const [ballsFaced, setBallsFaced] = useState(0);
  const [battingAvg, setBattingAvg] = useState(0);
  const [strikeRate, setStrikeRate] = useState(0);
  const [result, setResult] = useState({ price: 0, accuracy: 0 });

  //   value={runs} onChange={setRuns}
  function handleSubmit(e) {
    e.preventDefault();
    const queryParams = {
      t1: 'TRUE',
      t2: runs,
      t3: ballsFaced,
      t4: battingAvg,
      t5: strikeRate,
    };
    console.log(queryParams);

    fetch('http://localhost:5000/get?' + new URLSearchParams(queryParams))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      })
      .catch((e) => console.log(e));
  }
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.InputGroup}>
        <label>Runs</label>
        <input
          type='number'
          value={runs}
          onChange={(e) => setRuns(e.target.value)}
          placeholder='Runs'
        />
      </div>
      <div className={styles.InputGroup}>
        <label>Balls Faced</label>
        <input
          type='number'
          value={ballsFaced}
          onChange={(e) => setBallsFaced(e.target.value)}
          placeholder='Balls Faced'
        />
      </div>
      <div className={styles.InputGroup}>
        <label>Batting Average</label>
        <input
          type='number'
          value={battingAvg}
          onChange={(e) => setBattingAvg(e.target.value)}
          placeholder='Batting Average'
        />
      </div>
      <div className={styles.InputGroup}>
        <label>Strike Rate</label>
        <input
          type='number'
          value={strikeRate}
          onChange={(e) => setStrikeRate(e.target.value)}
          placeholder='Strike Rate '
        />
      </div>
      <button className={styles.submitBtn} type='submit'>
        SUBMIT
      </button>
      <h3>
        {result?.price > 0 &&
          'Rs. ' + result?.price?.toFixed(3).toString() + '/- Lakhs'}
        <br />
        {result?.price > 0 &&
          'Accuracy ' + (result?.accuracy?.toFixed(3) * 100).toString() + '%'}
      </h3>
    </form>
  );
};

export default BatsmenForm;
