import React, { useState, useMemo } from "react";
import "./SignUpStyles.css";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { createUserFromLogin } from "./DatabaseFunctions";
import { FaSpinner } from "react-icons/fa";
import {ConsoleLogVariable, IncrementCounter, DecrementCounter} from "../actions/SignUpFormActions";
// import { IconContext } from "react-icons";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state);
  const counter = useSelector((state) => state.Counter)
  const debouncedChangeHandler = useMemo(() => {
    return debounce(dispatch, 500);
  }, [dispatch]);

  const ConsoleLogVariable = (name) => {
    console.log(name);
  };


  return (
    <div className="signupform">
      <form>
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPUSER_FIRSTNAME",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPUSER_LASTNAME",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPUSER_EMAIL",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPUSER_PASSWORD",
              payload: e.target.value,
            })
          }
          type="password"
          placeholder="Password"
        />
        {loading ? (
          <button>
            <FaSpinner className="icon" />
          </button>
        ) : (
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Loading" : "Submit"}
            onClick={(e) => createUserFromLogin(e, user, setLoading)}
          />
        )}
        {counter}
      </form>
      <button onClick={() => IncrementCounter(dispatch)}>Increment</button>
      <button onClick={() => DecrementCounter(dispatch)}>Decrement</button>
      <button onClick={() => ConsoleLogVariable("Justin")}>Print To Console</button>
    </div>
  );
}