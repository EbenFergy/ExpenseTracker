import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import Cards from "../UI/Cards";
import ExpenseFilter from "../Filter/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const expensesObj = props.expensesList;

  const expenseFilterSelect = (selection) => {
    setFilteredYear(selection);
  };

  const capturedFilterYear = expensesObj.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  const filterConditions =
    filteredYear === "All"
      ? expensesObj.map((expenses) => (
          <ExpenseItem key={expenses.id} {...expenses} />
        ))
      : capturedFilterYear.length === 0
      ? "No item found for that year"
      : capturedFilterYear.map((expenses) => (
          <ExpenseItem key={expenses.id} {...expenses} />
        ));

  return (
    <div className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        selection={expenseFilterSelect}
      />

    {filterConditions}
    </div>
  );
};

export default Expenses;
