import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({nombre, precio}) => {
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
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail