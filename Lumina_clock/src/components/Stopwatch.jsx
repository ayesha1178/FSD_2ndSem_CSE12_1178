import { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="widget">
      <h2>⏱ Stopwatch</h2>

      <h3>{seconds}s</h3>

      <button onClick={() => setRunning(true)}>Start</button>

      <button onClick={() => setRunning(false)}>Pause</button>

      <button
        onClick={() => {
          setSeconds(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;