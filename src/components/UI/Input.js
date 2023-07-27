import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { input, value, label } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} value={value} />
    </div>
  );
});

export default Input;
