import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import TopRated from "./components/TopRated/TopRated";
import ABout from "./components/About/ABout";
import Cart from "./components/Cart/Cart";
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
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
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
