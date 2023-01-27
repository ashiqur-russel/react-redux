import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProdcutProvider from "./contexts/ProdcutProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProdcutProvider>
      <App />
    </ProdcutProvider>
  </React.StrictMode>
);
