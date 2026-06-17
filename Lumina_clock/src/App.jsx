import { useState, useEffect } from "react";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import Quote from "./components/Quote";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <div className="glass-card">
        <h1>✨ Lumina Clock</h1>

        <div className="theme-buttons">
          <button onClick={() => setTheme("dark")}>Dark</button>
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("neon")}>Neon</button>
        </div>

        <Clock />
        <Quote />
        <Stopwatch />
        <Timer />
      </div>
    </div>
  );
}

export default App;