import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_LIST = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Samsung Phone",
    amount: 980,
    date: new Date(2019, 4, 2),
  },
  {
    id: "e6",
    title: "Nokia",
    amount: 250,
    date: new Date(2020, 6, 2),
  },
  {
    id: "e7",
    title: "Iphone",
    amount: 2000,
    date: new Date(2019, 2, 2),
  },
  {
    id: "e8",
    title: "Blackberry",
    amount: 600,
    date: new Date(2022, 5, 2),
  },
  {
    id: "e9",
    title: "Orange",
    amount: 3200,
    date: new Date(2022, 10, 2),
  },
  {
    id: "e10",
    title: "Blackberry",
    amount: 800,
    date: new Date(2019, 11, 2),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_LIST);
  const newExpense = (formResponse) => {
    setExpenses((prevExpenses) => {
      return [formResponse, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense newExpense={newExpense} />
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;
