import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import './Home.css';

function Home() {
  return (
    <Box
      className='home'
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack
        spacing={6}
        alignItems='center'
        width='100%'
        p={8}
        bg='rgba(255, 255, 255, 0.8)'
        borderRadius='md'
      >
        <Heading as='h1' size='2xl' color='purple.600'>
          Welcome to LearnX
        </Heading>
        <Text fontSize='xl' textAlign='center' fontStyle='italic' color='gray.700'>
        "Inspiring Curiosity, Igniting Passion"
        </Text>
        <Text fontSize='lg' textAlign='center' color='gray.800'>
          Join us on a journey of learning and discovery!
        </Text>
        <Link to='/courses'>
          <Button size='lg' colorScheme='purple'>
            Explore Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Home;