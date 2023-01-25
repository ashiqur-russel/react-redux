import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    numberOfpc: 0,
    feedback: "",
    terms: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "INCREMENT":
        return {
          ...state,
          numberOfpc: state.numberOfpc + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          numberOfpc: state.numberOfpc - 1,
        };
      case "TOGGLE":
        return {
          ...state,
          terms: !state.terms,
        };
      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const submitHandler = (e) => {
    e.preventDefault();
    if (state.terms) {
      console.log(state);
    } else {
      console.log("Check");
    }
  };
  return (
    <>
      <div className="App">
        <form className="form-group" onSubmit={submitHandler}>
          <div className="form-container">
            <div className="form-top">
              <div className="left">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />

                <label htmlFor="education">Education</label>

                <select
                  id="education"
                  name="education"
                  onChange={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                >
                  <option value="ssc">SSC</option>
                  <option value="hsc">HSC</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </select>

                <label htmlFor="feedback">Feedback</label>
                <textarea
                  type="text"
                  name="feedback"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="right">
                <label htmlFor="lastName">Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />

                <div className="radio-btn">
                  <p>Gender:</p> {" "}
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onClick={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                    <label htmlFor="html">Male</label> {" "}
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onClick={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                    <label htmlFor="css">Female</label> {" "}
                  <input
                    type="radio"
                    id="others"
                    name="gender"
                    value="others"
                    onClick={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                    <label htmlFor="others">Others</label>
                </div>
                <label htmlFor="pc">Number of Pc</label>

                <div className="numOfPc">
                  <button
                    className="btnNumb"
                    onClick={(e) =>
                      dispatch({
                        type: "INCREMENT",
                      })
                    }
                  >
                    +
                  </button>
                  <span name="numberOfpc" id="numberOfpc">
                    {state.numberOfpc}
                  </span>{" "}
                  <button
                    className="btnNumb"
                    onClick={(e) =>
                      dispatch({
                        type: "DECREMENT",
                      })
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="form-bottom">
              <div>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onClick={(e) =>
                    dispatch({
                      type: "TOGGLE",
                    })
                  }
                />
                <label htmlFor="terms">Subscribe to newsletter?</label>
              </div>
              <div className="btn-submit1">
                <button className="btn-submit" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
