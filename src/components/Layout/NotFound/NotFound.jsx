import { Container, VStack, Text } from '@chakra-ui/react';
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
  return (
    <Container h={'90vh'}>
    <VStack justifyContent={'center'} h={'full'} spacing={6} p={8} borderRadius='md' bg='rgba(255, 255, 255, 0.8)'>
        <RiErrorWarningFill size={"5rem"} />
        <Text fontSize='lg' color='gray.800' textAlign='center'>
                Page Not Found
        </Text>
      </VStack>
    </Container>
  )
}

export default NotFound
