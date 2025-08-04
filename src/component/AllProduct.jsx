import React, { useEffect, useState } from 'react';
import "./AllProduct.css";

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-section">
      <h1 className="heading">All Products</h1>
      {loading ? (
        <p className="loading">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.slice(0, 30).map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <span className="category">{product.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}