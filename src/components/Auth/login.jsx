import React from 'react';
import { Box, Heading, VStack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <VStack spacing={4} width="300px" textAlign="center">
        <Heading size={['md', 'lg', 'xl']}>Welcome To LearnX</Heading>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button colorScheme="blue" width="full">
          Login
        </Button>
        <Link to="/forgetpassword">
          <Button colorScheme="red" variant="outline" width="full">
            Forgot Password
          </Button>
        </Link>
        {/* Add a Link to navigate to the registration or signup page */}
        <Link to="/signup">
          <Button colorScheme="green" width="full">
            New User? Sign Up
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Login;
