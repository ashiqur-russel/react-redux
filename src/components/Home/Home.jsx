import React, { useState, useEffect } from "react";

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
  return <div className="card-container"></div>;
};

export default Home;
