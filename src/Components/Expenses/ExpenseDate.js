import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "short" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="calender">
      <div className="month">{month} </div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
