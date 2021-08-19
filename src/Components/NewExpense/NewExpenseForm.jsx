import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  const [enteredIpnut, setEnteredInput] = useState("");
  const input = (e) => setEnteredInput(e.target.value);
  console.log(enteredIpnut);

  return (
    <form action="" className="">
      <div className="new-expense-form__cont">
        <div className="title_cont">
          <label>Title</label>
          <input type="text" onChange={input} required />
        </div>
        <div className="amount_cont">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={input} required />
        </div>
        <div className="date_cont">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={input} required />
        </div>
      </div>
      <div className="new-expense__submitBtn">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
