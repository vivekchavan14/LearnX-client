import React from 'react';
import { Box, Heading, VStack, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

function ForgetPassword() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <VStack spacing={4} width="300px" textAlign="center">
        <Heading size={['md', 'lg', 'xl']}>Forgot Password</Heading>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            // Apply Chakra UI styles here, for example:
            borderColor="blue.500"
            borderRadius="md"
            _hover={{ borderColor: 'blue.700' }}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          width="full"
          // Apply Chakra UI styles here, for example:
          _hover={{ bg: 'blue.700' }}
        >
          Reset Password
        </Button>
      </VStack>
    </Box>
  );
}

export default ForgetPassword;
