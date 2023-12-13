import React, { useState } from 'react';
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Image } from '@chakra-ui/react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ nombre, precio }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
  };

  return (
    <div>
      <Card maxW='sm' m='5'>
        <CardBody>
          <Image
            src='https://http2.mlstatic.com/D_NQ_NP_906737-MLA45764711027_042021-O.webp'
            alt='remera'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{nombre}</Heading>
            <Text>
              Una remera con un estampado único que destaca tu estilo y pasión por los videojuegos.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
            <AddItemButton onAddToCart={handleAddToCart} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
