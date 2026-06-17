import Clock from "./components/Clock";

function App() {
  return (
    <div className="app">
      <div className="background-glow glow1"></div>
      <div className="background-glow glow2"></div>

      <h1 className="logo">
        ✨ Lumina Clock
      </h1>

      <Clock />
    </div>
  );
}

export default App;