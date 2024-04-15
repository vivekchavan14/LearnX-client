import React, { useState } from 'react';
import { Box, Heading, VStack, Text, Input, Button, FormControl, FormLabel, Alert, AlertIcon } from '@chakra-ui/react';

function RequestCourse() {
  const [email, setEmail] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('')
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmit = () => {
    // You can implement the logic to submit the course request here
    // For this example, we'll just set requestSubmitted to true
    setRequestSubmitted(true);
  };

  return (
    <Box
      className='request-course'
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack spacing={6} alignItems='center' width='100%' p={8} borderRadius='md'>
        <Heading as='h1' size='2xl' color='purple.600'>
          Request a Course
        </Heading>
        <Text fontSize='lg' textAlign='center' color='gray.800'>
          Fill out the form below to request a new course.
        </Text>
        <FormControl id='email'>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id='courseName'>
          <FormLabel>Course Name</FormLabel>
          <Input
            type='text'
            placeholder='Enter the course name'
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </FormControl>
        <FormControl id='courseName'>
          <FormLabel>Course Description</FormLabel>
          <Input
            type='text'
            placeholder='Enter the course description'
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </FormControl>
        <Button colorScheme='purple' onClick={handleSubmit}>
          Submit Request
        </Button>
        {requestSubmitted && (
          <Alert status='success'>
            <AlertIcon />
            Your course request has been submitted successfully!
          </Alert>
        )}
      </VStack>
    </Box>
  );
}

export default RequestCourse;
