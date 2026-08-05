import { useState, useEffect } from "react";

function Timer() {

  const START_TIME = 2 * 60;

  const [timeLeft, setTimeLeft] = useState(START_TIME);
  const [running, setRunning] = useState(false);

  useEffect(() => {

    if (!running) return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);
          setRunning(false);
          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [running]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (

    <div className="timer-card">

      <h3>Study Timer</h3>

      <div className="timer-display">
        {minutes}:{seconds}
      </div>

      <div className="timer-buttons">

        <button
          className="timer-btn"
          onClick={() => setRunning(!running)}
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          className="timer-btn reset"
          onClick={() => {
            setRunning(false);
            setTimeLeft(START_TIME);
          }}
        >
          Reset
        </button>

      </div>

    </div>

  );

}

export default Timer;