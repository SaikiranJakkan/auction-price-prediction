import { useState } from 'react';
import styles from './styles.module.css';

const BatsmenForm = () => {
  const [ballsBowled, setBallsBowled] = useState(undefined);
  const [bowlingAvg, setBowlingAvg] = useState(undefined);
  const [economy, setEconomy] = useState(undefined);
  const [wickets, setWickets] = useState(undefined);
  const [result, setResult] = useState({ price: 0, accuracy: 0 });
  // value={runs} onChange={setRuns}
  function handleSubmit(e) {
    e.preventDefault();

    const queryParams = {
      t1: 'FALSE',
      t2: ballsBowled,
      t3: bowlingAvg,
      t4: economy,
      t5: wickets,
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
        <label>Balls Faced</label>
        <input
          type='number'
          value={ballsBowled}
          onChange={(e) => setBallsBowled(e.target.value)}
          placeholder='Balls Faced'
        />
      </div>
      <div className={styles.InputGroup}>
        <label>Average</label>
        <input
          type='number'
          value={bowlingAvg}
          onChange={(e) => setBowlingAvg(e.target.value)}
          placeholder='Average'
        />
      </div>
      <div className={styles.InputGroup}>
        <label>Economy</label>
        <input
          type='number'
          value={economy}
          onChange={(e) => setEconomy(e.target.value)}
          placeholder='Economy'
        />
      </div>
      <div className={styles.InputGroup}>
        <label>Wickets</label>
        <input
          type='number'
          value={wickets}
          onChange={(e) => setWickets(e.target.value)}
          placeholder='Wickets'
        />
      </div>
      <button className={styles.submitBtn} type='submit'>
        SUBMIT
      </button>
      <h3>
        <h3>
          {result?.price > 0 &&
            'Rs. ' + result?.price?.toFixed(3).toString() + '/- Lakhs'}
          <br />
          {result?.price > 0 &&
            'Accuracy ' + (result?.accuracy?.toFixed(3) * 100).toString() + '%'}
        </h3>
      </h3>
    </form>
  );
};

export default BatsmenForm;
