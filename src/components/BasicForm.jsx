import useInput from "../hooks/use-input";

const validate = {
  isNotEmpty: (value) => value.trim() !== "",
  isEmail: (value) => value.includes("@"),
};

const BasicForm = (props) => {
  const { isNotEmpty, isEmail } = validate;
  const {
    value: firstNamevalue,
    isValid: firstNameIsValid,
    hasError: firstNameError,
    changeHandler: firstNameHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameError,
    changeHandler: lastNameHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    changeHandler: emailHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const submitHandler = (e) => {
    e.preventDefault;
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) return;

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  let formValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formValid = true;
  }

  const firstNameClass = firstNameError
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = lastNameError ? "form-control invalid" : "form-control";
  const emailClass = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNamevalue}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && (
            <p className="error-text">First Name is Invalid</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && <p className="error-text">Last Name is Invalid</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
