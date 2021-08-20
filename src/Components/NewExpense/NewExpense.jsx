import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import Cards from '../UI/Cards'

const NewExpense = (props) => {

    const onSubmitHandler =(formResponse)=>{
        props.newExpense(formResponse);
    }
  return (
    <Cards className='new-expense__cont'>
      <NewExpenseForm onSubmitHandler={onSubmitHandler}/>
    </Cards>
  );
};

export default NewExpense;
