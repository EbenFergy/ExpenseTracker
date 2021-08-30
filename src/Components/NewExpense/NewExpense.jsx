import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import Cards from "../UI/Cards";
import Buttons from "../UI/Buttons";

const NewExpense = (props) => {
  const [formMinimize, setFormMinimize] = useState(false);

  const onSubmitHandler = (formResponse) => {
    props.newExpense(formResponse);
    setFormMinimize(false)
  };

  const buttonSwitchHandler = () => {
    setFormMinimize((prevFormMinimize) => !prevFormMinimize);
  };

  const cancelSwitchHandler = () => {
    setFormMinimize(false);
  };

  return (
    <Cards className="new-expense__cont">
      {formMinimize === true && (
        <NewExpenseForm
          onSubmitHandler={onSubmitHandler}
          cancel={cancelSwitchHandler}
        />
      )}
      {formMinimize === false && (
        <Buttons>
          <button className="switch-btn" onClick={buttonSwitchHandler}>
            Add New Expense
          </button>
        </Buttons>
      )}
    </Cards>
  );
};

export default NewExpense;
