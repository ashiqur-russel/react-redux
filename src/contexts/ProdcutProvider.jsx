import React, { createContext, useState, useEffect } from "react";
export const PRODUCT_CONTEXT = createContext();

const ProdcutProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const value = { products };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default ProdcutProvider;
