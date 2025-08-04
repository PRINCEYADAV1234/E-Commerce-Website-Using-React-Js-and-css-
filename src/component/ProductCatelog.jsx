import React, { useEffect, useState } from "react";
import "./ProductCatelog.css";

import { Link } from 'react-router-dom';


export default function ProductCatelog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  return (
    <div className="product-section">
       {(location.pathname === '/' || location.pathname === '/products') && (
        <h1 className="heading">Trending Deals</h1>
      )}
      {loading ? (
        <p className="loading">Loading products...</p>
      ) : (
        <div className="product-grid">
  {products.slice(0, 12).map((product) => (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <span className="category">{product.category}</span>
      </div>
    </Link>
  ))}
</div>
      )}
    </div>
  );
}
