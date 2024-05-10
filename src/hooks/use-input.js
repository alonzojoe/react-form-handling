import { useEffect } from "react";

const useInput = (validatedValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validatedValue(enteredValue);
  const hasError = !enteredValueIsValud && isTouch;

  return {
    value: enteredValue,
    hasError,
  };
};

export default useInput;
