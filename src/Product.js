import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>*</p>
          ))}
      </div>
      <img src={image} alt="" />
      <button>add to basket</button>
    </div>
  );
}

export default Product;
