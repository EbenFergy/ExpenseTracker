import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import Cards from '../UI/Cards'

const NewExpense = () => {
  return (
    <Cards className='new-expense__cont'>
      <NewExpenseForm/>
    </Cards>
  );
};

export default NewExpense;
