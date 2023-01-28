import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { actionTypes } from "../state/ProductState/actionType";
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

  console.log(state);
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const value = { state, dispatch };

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
