import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from './Components/NewExpense/NewExpense';

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
    date: new Date(2021, 2, 28),
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
    date: new Date(2021, 4, 2),
  },
];
const App=()=> {
  const [expenses, setExpenses] = useState([]);
  const newExpense=(formResponse)=>{
    setExpenses((prevExpenses)=>{
      return [formResponse, ...prevExpenses]
    })
  }
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense newExpense={newExpense}/>
      <Expenses expensesList={expenses} />
    </div>
  );
}

export default App;
