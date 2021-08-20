import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Cards from '../UI/Cards'
import ExpenseFilter from '../Filter/ExpenseFilter';

const Expenses = (props) => {
  const expensesObj = props.expensesList;
  const expenseFilterSelect =(selection)=>{
    console.log(selection);
  }


  return (
    <div className="expenses">
      <Cards>
        <ExpenseFilter selection={expenseFilterSelect}/>
      </Cards>
      <ExpenseItem
        title={expensesObj[0].title}
        amount={expensesObj[0].amount}
        date={expensesObj[0].date}
      />
      <ExpenseItem
        title={expensesObj[1].title}
        amount={expensesObj[1].amount}
        date={expensesObj[1].date}
      />
      <ExpenseItem
        title={expensesObj[2].title}
        amount={expensesObj[2].amount}
        date={expensesObj[2].date}
      />
      <ExpenseItem
        title={expensesObj[3].title}
        amount={expensesObj[3].amount}
        date={expensesObj[3].date}
      />
      <ExpenseItem
        title={expensesObj[4].title}
        amount={expensesObj[3].amount}
        date={expensesObj[4].date}
      />
    </div>
  );
};

export default Expenses;
