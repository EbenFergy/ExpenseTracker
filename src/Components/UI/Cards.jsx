import React from 'react'
import "./Cards.css";

const Cards = ({ className, children }) => {
  const classes = `cards ${className}`;
  return <div className={classes}> {children}</div>;
};

export default Cards;
