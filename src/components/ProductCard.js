import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
