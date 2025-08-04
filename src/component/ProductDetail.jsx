import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-detail-container">
      <div className="left-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="right-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button className="buy-btn">Buy Now</button>
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
