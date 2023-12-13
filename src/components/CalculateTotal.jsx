import React from 'react';
import { calculateTotal } from '../utils'; // Importa la función de cálculo desde un archivo utilitario
import AddItemButton from './AddItemButton'; // Importa el botón de agregar al carrito

const Checkout = ({ cartItems }) => {
  return (
    <div className='checkout'>
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio unitario: ${item.precio}</p>
        </div>
      ))}
      <p>Total: ${calculateTotal(cartItems)}</p>
      <AddItemButton onAddToCart={() => {}} /> {/* Puedes manejar la lógica según tus necesidades */}
    </div>
  );
};

const Brief = ({ cartItems }) => {
  return (
    <div className='brief'>
      <h2>Resumen de la compra</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio unitario: ${item.precio}</p>
        </div>
      ))}
      <p>Total: ${calculateTotal(cartItems)}</p>
    </div>
  );
};
