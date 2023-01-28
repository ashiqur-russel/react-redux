import React from "react";
import { useProducts } from "../../contexts/ProdcutProvider";
import ProductCard from "../ProductCard/ProductCard";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong!</p>;
  }

  if (!loading && !error && products.length) {
    content = products
      .filter((p) => p.rating > 3)
      .map((product, _idx) => <ProductCard key={_idx} product={product} />);
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show , product list is empty.</p>;
  }
  return <div className="card-container">{content}</div>;
};

export default TopRated;
