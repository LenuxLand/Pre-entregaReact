import React from 'react';

const CartWidget = () => {
  const cartItemCount = 5;

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-danger">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
