import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import Cards from "../UI/Cards";
import ExpenseFilter from "../Filter/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const expensesObj = props.expensesList;

  const expenseFilterSelect = (selection) => {
    setFilteredYear(selection);
    // console.log(selection);
  };

  return (
    <div className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        selection={expenseFilterSelect}
      />
      {expensesObj.map((expenses) => (
        <ExpenseItem key={expenses.id} {...expenses} />
      ))}
    </div>
  );
};

export default Expenses;
