import React from "react";
import StudentCard from "./StudentCard";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Student Card</h1>

      <StudentCard name="Mary" marks="100" course="B.Tech CSE" />
      <StudentCard name="Joe" marks="99" course="B.Tech CSE-AI" />
      <StudentCard name="Darry" marks="98" course="B.Tech CSE-ML" />
    </div>
  );
}

export default App;