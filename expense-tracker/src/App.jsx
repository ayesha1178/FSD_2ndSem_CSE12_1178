import { useState, useEffect } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([
      transaction,
      ...transactions
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="app">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="container">

        <h1>💰 Expense Tracker Pro</h1>

        <Balance
          transactions={transactions}
        />

        <TransactionForm
          addTransaction={addTransaction}
        />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

      </div>
    </div>
  );
}

export default App;