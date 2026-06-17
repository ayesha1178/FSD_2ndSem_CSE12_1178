import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";

  return (
    <div className="clock">
      <h2>{greeting}</h2>

      <h1>{time.toLocaleTimeString()}</h1>

      <p>
        {time.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="timezones">
        <p>
          London:
          {new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/London",
          })}
        </p>

        <p>
          New York:
          {new Date().toLocaleTimeString("en-US", {
            timeZone: "America/New_York",
          })}
        </p>

        <p>
          Tokyo:
          {new Date().toLocaleTimeString("ja-JP", {
            timeZone: "Asia/Tokyo",
          })}
        </p>
      </div>
    </div>
  );
}

export default Clock;