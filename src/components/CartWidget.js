import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const cartItemCount = 3;

  return (
    <div
      className="cart-widget"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <FaShoppingCart size={24} />
      <span
        className="cart-count"
        style={{
          marginLeft: '8px',
          backgroundColor: '#f00',
          color: '#fff',
          borderRadius: '50%',
          padding: '4px 8px',
        }}
      >
        {cartItemCount}
      </span>
    </div>
  );
};

export default CartWidget;
