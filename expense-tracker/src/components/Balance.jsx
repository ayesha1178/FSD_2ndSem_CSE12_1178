function Balance({ transactions }) {

  const amounts = transactions.map(
    item => item.amount
  );

  const balance = amounts
    .reduce((a, b) => a + b, 0);

  const income = amounts
    .filter(item => item > 0)
    .reduce((a, b) => a + b, 0);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((a, b) => a + b, 0);

  return (
    <div>

      <div className="balance-card">
        <h2>
          ₹{balance.toFixed(2)}
        </h2>
        <p>Total Balance</p>
      </div>

      <div className="summary">

        <div className="income">
          <h3>Income</h3>
          <p>
            ₹{income.toFixed(2)}
          </p>
        </div>

        <div className="expense">
          <h3>Expense</h3>
          <p>
            ₹{Math.abs(expense).toFixed(2)}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Balance;