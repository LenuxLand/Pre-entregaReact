import React from 'react';
import { Button } from '@chakra-ui/react';

const AddItemButton = ({ onAddToCart }) => {
  const addCart = () => {
    onAddToCart();
    // Add logic for displaying success or error message if needed
  };

  return (
    <>
      <div className='classCount'>
        <Button colorScheme='linkedin' onClick={addCart}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default AddItemButton;
