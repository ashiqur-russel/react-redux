import React, { useContext, useEffect } from "react";
import { PRODUCT_CONTEXT, useProducts } from "../../contexts/ProdcutProvider";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <div className="card-container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Home;
