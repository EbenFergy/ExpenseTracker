import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputHandler = (e) => setEnteredInput(e.target.value);
  const amountHandler = (e) => setEnteredAmount(e.target.value);
  const dateHandler = (e) => setEnteredDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const newFormData = {
      title: enteredInput,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().tpString()
    };
    props.onSubmitHandler(newFormData);
    setEnteredInput('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form action="" className="" onSubmit={submitHandler}>
      <div className="new-expense-form__cont">
        <div className="title_cont">
          <label>Title</label>
          <input type="text" onChange={inputHandler} value={enteredInput} required />
        </div>
        <div className="amount_cont">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={enteredAmount}
            required
          />
        </div>
        <div className="date_cont">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={enteredDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__submitBtn">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
