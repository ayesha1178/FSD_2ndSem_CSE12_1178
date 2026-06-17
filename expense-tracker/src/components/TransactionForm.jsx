import { useState } from "react";

function TransactionForm({
  addTransaction
}) {

  const [text, setText] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      text === "" ||
      amount === ""
    )
      return;

    addTransaction({
      id: Date.now(),
      text,
      amount: Number(amount)
    });

    setText("");
    setAmount("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="form"
    >

      <input
        type="text"
        placeholder="Transaction Name"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <small>
        Income = Positive
        Expense = Negative
      </small>

      <button>
        Add Transaction
      </button>

    </form>
  );
}

export default TransactionForm;