import React from 'react';
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio }) => {
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
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={'/cart'}>
              <Button variant='solid' colorScheme='blue'>
                Agregar al carrito
              </Button>
            </Link>
            <Link to={`/item/${id}`}>
              <Button variant='ghost' colorScheme='blue'>
                Detalles
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
