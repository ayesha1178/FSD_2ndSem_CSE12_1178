function TransactionList({
  transactions,
  deleteTransaction
}) {

  return (
    <div>

      <h2>
        Recent Transactions
      </h2>

      {transactions.map((item) => (

        <div
          key={item.id}
          className={`transaction ${
            item.amount > 0
              ? "plus"
              : "minus"
          }`}
        >

          <span>
            {item.text}
          </span>

          <span>
            ₹{item.amount}
          </span>

          <button
            onClick={() =>
              deleteTransaction(
                item.id
              )
            }
          >
            ✖
          </button>

        </div>

      ))}
    </div>
  );
}

export default TransactionList;