import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [inputTouch, setInputTouch] = useState(false);

  const changeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInputTouch(true);
    if (enteredName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  const enteredNameValid = !isValid && inputTouch;

  const inputClasses = enteredNameValid
    ? "form-control invalid"
    : "form-control";

  const blurHandler = (e) => {
    setInputTouch(true);
    if (enteredName.trim().length === 0) {
      setIsValid(false);
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label
          htmlFor="name"
          style={{
            color: enteredNameValid ? "red" : "",
          }}
        >
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          style={{ borderColor: enteredNameValid ? "red" : "" }}
          value={enteredName}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        {enteredNameValid && (
          <p className="error-text" style={{ textAlign: "left" }}>
            Field Required: Name
          </p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
