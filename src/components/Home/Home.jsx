import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="card-container">
      {products.map((product, _idx) => (
        <ProductCard key={_idx} product={product} state={state} />
      ))}
    </div>
  );
};

export default Home;
