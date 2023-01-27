import { createContext, useReducer, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import TopRated from "./components/TopRated/TopRated";
import ABout from "./components/About/ABout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/top-rated",
        element: <TopRated></TopRated>,
      },
      {
        path: "/about",
        element: <ABout></ABout>,
      },
    ],
  },
]);

const PRODUCT_CONTEXT = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const value = { products };
  return (
    <div className="app-container">
      <PRODUCT_CONTEXT.Provider value={value}>
        <RouterProvider router={router}></RouterProvider>
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
}

export default App;
