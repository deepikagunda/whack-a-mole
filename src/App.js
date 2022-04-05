import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null);
  const [countDownTimer, setCountDownTimer] = useState(60);
  const maxIdx = rows * cols || 1;

  useEffect(() => {
    // on initial load show start updating mole position
    const intervalTimer = setInterval(() => {
      setCountDownTimer((countDownTimer) => {
        if (countDownTimer === 0) {
          setMolePosition(null);
          clearInterval(intervalTimer);
        }
        return countDownTimer > 0 ? countDownTimer - 1 : 0;
      });
      //update mole position
      setMolePosition(Math.floor(Math.random() * maxIdx));
    }, 1000);

    //clear interval timer
    return () => clearInterval(intervalTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //reset timer :TODO}
  }, [rows, cols]);

  const handleClick = (event) => {
    if (event.target.id == molePosition) {
      setScore((score) => score + 1);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <section className="largetext">Whack-a-mole</section>
        <div className="details">
          <div>
            <span>
              rows:&nbsp;
              <input
                className="smallWidth"
                value={rows}
                onChange={(e) =>
                  setRows(e.target.value ? parseInt(e.target.value) : null)
                }
              />
            </span>{" "}
            <span>
              cols:&nbsp;
              <input
                className="smallWidth"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value))}
              />
            </span>
          </div>
          <div>Score : {score}</div>
          <div>Time left : {countDownTimer}</div>
        </div>
        <Board
          rows={rows || 0}
          cols={cols || 0}
          handleClick={handleClick}
          molePosition={molePosition}
        />
      </div>
    </div>
  );
}

export default App;
