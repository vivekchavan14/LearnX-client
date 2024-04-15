import React, { useState } from 'react';
import { Box, Heading, VStack, Input, Button, FormControl, FormLabel, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Signup() {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    // You can handle the selected file here, e.g., store it in state or send it to the server.
    setProfilePhoto(file);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <VStack spacing={4} width="300px" textAlign="center">
        <Avatar size="xl" name="User" src={profilePhoto ? URL.createObjectURL(profilePhoto) : null} />
        <Heading size={['md', 'lg', 'xl']}>Sign Up for LearnX</Heading>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <FormControl id="profilePhoto">
          <FormLabel>Profile Photo</FormLabel>
          <Input type="file" accept="image/*" onChange={handleProfilePhotoChange} />
        </FormControl>
        <Button colorScheme="green" width="full">
          Sign Up
        </Button>
        {/* Add a Link to navigate to the "Login" page */}
        <Link to="/login">
          <Button colorScheme="blue" variant="outline" width="full">
            Already have an account? Login
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Signup;
