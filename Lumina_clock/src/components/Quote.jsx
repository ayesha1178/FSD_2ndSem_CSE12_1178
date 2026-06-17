function Quote() {
  const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Stay focused and never give up.",
    "Dream big. Start small.",
    "Discipline beats motivation.",
    "Every day is a fresh start."
  ];

  const quote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="widget">
      <h2>💬 Quote of the Day</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Quote;