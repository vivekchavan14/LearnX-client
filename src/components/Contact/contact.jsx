import { Container, Heading, VStack, Box, Input, Textarea, Button } from '@chakra-ui/react';
import React from 'react';

function Contact() {
  return (
    <Container h="92vh">
      <VStack spacing={6} align="center">
        <Heading as="h1" size="xl" fontWeight="bold">
          Contact Us
        </Heading>
        <Box w="100%" maxW="400px" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
          <Input
            placeholder="Your Name"
            size="lg"
            marginBottom={4}
            borderRadius="lg"
            borderColor="gray.300"
            _hover={{ borderColor: 'blue.400' }}
            _focus={{ borderColor: 'blue.400' }}
          />
          <Input
            placeholder="Your Email"
            size="lg"
            marginBottom={4}
            borderRadius="lg"
            borderColor="gray.300"
            _hover={{ borderColor: 'blue.400' }}
            _focus={{ borderColor: 'blue.400' }}
          />
          <Textarea
            placeholder="Your Message"
            size="lg"
            h="150px"
            marginBottom={4}
            borderRadius="lg"
            borderColor="gray.300"
            _hover={{ borderColor: 'blue.400' }}
            _focus={{ borderColor: 'blue.400' }}
          />
          <Button colorScheme="blue" size="lg" borderRadius="lg">
            Send Message
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default Contact;
