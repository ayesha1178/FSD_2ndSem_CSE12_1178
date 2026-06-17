import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="App">
        <h1>React Counter Application</h1>
        <h2>{count}</h2>

        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;