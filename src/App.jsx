import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Child from "./components/Child";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="App">
        <form className="form-group" onSubmit={submitHandler}>
          <div className="form-container">
            <div className="form-top">
              <div className="left">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="education">Education</label>

                <select id="cars" name="cars">
                  <option value="ssc">SSC</option>
                  <option value="hsc">HSC</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </select>

                <label htmlFor="feedback">Feedback</label>
                <textarea type="text" name="feedback" />
              </div>
              <div className="right">
                <label htmlFor="fname">Last Name</label>

                <input type="text" name="lname" />

                <div className="radio-btn">
                  <p>Gender:</p> {" "}
                  <input type="radio" id="male" name="gender" value="male" /> {" "}
                  <label for="html">Male</label> {" "}
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                    <label for="css">Female</label> {" "}
                  <input
                    type="radio"
                    id="others"
                    name="gender"
                    value="Others"
                  />
                    <label for="others">Others</label>
                </div>
                <label htmlFor="pc">Number of Pc</label>

                <div className="numOfPc">
                  <button className="btnNumb">+</button>
                  <span name="number" id="number">
                    0
                  </span>{" "}
                  <button className="btnNumb">-</button>
                </div>
              </div>
            </div>
            <div className="form-bottom">
              <div>
                <input
                  type="checkbox"
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter"
                />
                <label for="subscribeNews">Subscribe to newsletter?</label>
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
