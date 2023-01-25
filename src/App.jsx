import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Child from "./components/Child";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="App">
        <div className="container">
          <p>{state.count}</p>
          <div className="btn-group">
            <button onClick={() => dispatch({ type: "increment" })}>
              Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
              Decrement
            </button>
          </div>
        </div>
        <Child state={state} />
      </div>
    </>
  );
}

export default App;
