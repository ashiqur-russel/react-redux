import React, { useContext, useEffect } from "react";
import { PRODUCT_CONTEXT, useProducts } from "../../contexts/ProdcutProvider";

const Home = () => {
  const { products } = useProducts();
  console.log(products);
  return <div>home</div>;
};

export default Home;
