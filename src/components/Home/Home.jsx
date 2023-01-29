import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="card-container">
      {products.map((product, _idx) => (
        <ProductCard key={_idx} product={product} />
      ))}
    </div>
  );
};

export default Home;
