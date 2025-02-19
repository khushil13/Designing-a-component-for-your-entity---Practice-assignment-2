import React from 'react';
import Button from '../components/button';
import './productcard.css'; 

const Productcard = () => {
  const productImage = 'product-image-url.jpg';
  const productName = 'Best Product';
  const productPrice = '$99';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">{productPrice}</p>
      <Button text="View Product" />
    </div>
  );
};

export default Productcard;