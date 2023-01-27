import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>hello</Main>,
  },
]);
function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
