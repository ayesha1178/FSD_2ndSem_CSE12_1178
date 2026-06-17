import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";

  return (
    <div className="clock-card">
      <h2>{greeting}</h2>

      <h1 className="clock-time">
        {time.toLocaleTimeString()}
      </h1>

      <p className="date">
        {time.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <div className="divider"></div>

      <div className="world-clocks">
        <div>
          <h3>🇮🇳 India</h3>
          <p>
            {new Date().toLocaleTimeString("en-IN", {
              timeZone: "Asia/Kolkata",
            })}
          </p>
        </div>

        <div>
          <h3>🇬🇧 London</h3>
          <p>
            {new Date().toLocaleTimeString("en-GB", {
              timeZone: "Europe/London",
            })}
          </p>
        </div>

        <div>
          <h3>🇺🇸 New York</h3>
          <p>
            {new Date().toLocaleTimeString("en-US", {
              timeZone: "America/New_York",
            })}
          </p>
        </div>

        <div>
          <h3>🇯🇵 Tokyo</h3>
          <p>
            {new Date().toLocaleTimeString("ja-JP", {
              timeZone: "Asia/Tokyo",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clock;