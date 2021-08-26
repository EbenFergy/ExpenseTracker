import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {
  // const {id, title, amount, date} = expenses_Items;

  // expenses.filter((year)=>{
  //   if year === props.formResponse.date.getFullYear()
  //  })
  return (
    <Cards className="expense-item">
      <div className="">
        <ExpenseDate date={props.date} />
      </div>

      <div className="expense-item__description">
        <h2 className="">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
};

export default ExpenseItem;
