import { useState, useReducer, act } from "react";

const initialState = {
  value: "",
  isTouch: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, value: action.payload.value };
    case "TOUCH":
      return { ...state, isTouch: true };
    case "DEFAULT":
      return initialState;
    default:
      return state;
  }
};

const useInput = (validatedValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validatedValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  const changeHandler = (e) => {
    dispatch({ type: "INPUT", payload: { value: e.target.value } });
  };

  const blurHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const reset = () => {
    dispatch({ type: "DEFAULT" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
