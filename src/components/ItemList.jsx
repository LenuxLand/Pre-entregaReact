import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className='itemListContainer'>
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
