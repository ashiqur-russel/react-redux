import React, { useContext, useEffect } from "react";
import { PRODUCT_CONTEXT } from "../../contexts/ProdcutProvider";

const Home = () => {
  const { products } = useContext(PRODUCT_CONTEXT);
  console.log(products);
  return <div>home</div>;
};

export default Home;
