import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      className="item-list-container"
      style={{ textAlign: 'center', padding: '20px' }}
    >
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
