import React from 'react'
import "./Buttons.css";

const Buttons = ({ className, children }) => {
  const classes = `buttons ${className}`;
  return <div className={classes}> {children}</div>;
};

export default Buttons;
