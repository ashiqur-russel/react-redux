import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";
export const PRODUCT_CONTEXT = createContext();

const ProdcutProvider = ({ children }) => {
  //reducer call
  const [state, dispatch] = useReducer(productReducer, initialState);
  //product state defined
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
export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProdcutProvider;
