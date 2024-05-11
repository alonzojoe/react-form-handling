import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsvalid = false;

  if (isValid && enteredEmailIsValid) {
    formIsvalid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isValid && !enteredEmailIsValid) return;
    reset();
    resetEmail();
  };

  const inputClasses = hasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label
          htmlFor="name"
          style={{
            color: hasError ? "red" : "",
          }}
        >
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          style={{ borderColor: hasError ? "red" : "" }}
          value={enteredName}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        {hasError && (
          <p className="error-text" style={{ textAlign: "left" }}>
            Field Required: Name
          </p>
        )}
      </div>
      <div className={emailClasses}>
        <label
          htmlFor="email"
          style={{
            color: emailHasError ? "red" : "",
          }}
        >
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          style={{ borderColor: emailHasError ? "red" : "" }}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text" style={{ textAlign: "left" }}>
            Invalid Field: Email
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
