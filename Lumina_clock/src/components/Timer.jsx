import { useState, useEffect } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval;

    if (active) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          alert("⏰ Time's Up!");
          setActive(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active, minutes, seconds]);

  return (
    <div className="widget">
      <h2>⏳ Countdown Timer</h2>

      <input
        type="number"
        value={minutes}
        min="1"
        onChange={(e) => setMinutes(Number(e.target.value))}
      />

      <h3>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h3>

      <button onClick={() => setActive(true)}>Start</button>

      <button onClick={() => setActive(false)}>Pause</button>
    </div>
  );
}

export default Timer;
