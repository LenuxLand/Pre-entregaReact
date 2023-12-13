import React, { useState } from 'react';
import { Button, Badge } from '@chakra-ui/react';

const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <>
      <div className='countContainer'>
        <div className='classCount'>
          <Button colorScheme='teal' variant='ghost' onClick={handleDecrement}>
            -
          </Button>

          <Badge colorScheme='purple'>{quantity}</Badge>

          <Button colorScheme='teal' variant='ghost' onClick={handleIncrement}>
            +
          </Button>
        </div>
        <div className='classCount'>
          <Button colorScheme='linkedin'>Agregar al carrito</Button>
        </div>
      </div>
    </>
  );
};

export default ItemQuantitySelector;
