import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label
          htmlFor="name"
          style={{
            color: !isValid ? "red" : "",
          }}
        >
          Your Name: {!isValid && "Please Entere a valid name"}
        </label>
        <input
          type="text"
          id="name"
          style={{ borderColor: !isValid ? "red" : "" }}
          value={enteredName}
          onChange={changeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
