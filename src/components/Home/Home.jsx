import React, { useContext, useEffect } from "react";
import { PRODUCT_CONTEXT, useProducts } from "../../contexts/ProdcutProvider";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const {
    state: { products },
  } = useProducts();
  console.log(products);
  return (
    <div className="card-container">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Home;
