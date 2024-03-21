import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

import { Box, Button,Card,Image,Stack,CardBody,CardFooter, Center, Heading, Text } from "@chakra-ui/react";

function Downlode() {
  return (
    <Card
     
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  width={"80%"}
   
  margin={"auto"}
  variant='outline'
>
 

  <Stack>
    <CardBody>
      <Heading size='md'>Download Trophy Nig. App</Heading>
      <p>and never miss out any update</p>

      <Text py='2'>
      Get to know about newly posted Properties as soon as they are posted
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>

  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://img.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_90220-957.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais'
    alt='Caffe Latte'
  />
</Card>
  );
}

export default Downlode;