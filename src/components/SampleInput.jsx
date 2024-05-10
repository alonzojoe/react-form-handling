import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputTouch, setInputTouch] = useState(false);


  const isValid = enteredName.trim() !== "";
  const enteredNameValid = !isValid && inputTouch;

  let formIsvalid = false;

  if (isValid) {
    formIsvalid = true;
  } else {
    formIsvalid = false;
  }

  const changeHandler = (e) => {
    const { value } = e.target;
    setEnteredName(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInputTouch(true);

    if (!enteredName) return;

    console.log(enteredName);
    setEnteredName("");
    setInputTouch(false);
  };

  const inputClasses = enteredNameValid
    ? "form-control invalid"
    : "form-control";

  const blurHandler = () => {
    setInputTouch(true);
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
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
