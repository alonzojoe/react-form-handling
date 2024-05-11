import { useState } from "react";

const useInput = (validatedValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validatedValue(enteredValue);
  const hasError = !valueIsValid && isTouch;

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const blurHandler = () => {
    setIsTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouch(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
