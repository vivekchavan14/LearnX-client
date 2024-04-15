import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Select,
  VStack,
  Container,
  Image,
  Heading,
} from '@chakra-ui/react';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    "Fundamental Rights",
    "Legal Rights and Procedures",
    "Equality and Non-Discrimination",
    "Education Rights",
    "Safety and Protection",
    "Health and Well-being",
    "Privacy and Data Rights",
  ];

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container py="16">
      <form onSubmit={submitHandler}>
        <Heading
          children="Create Course"
          textTransform="uppercase"
          my="16"
          textAlign="center"
        />
        <VStack m="auto" spacing="8">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            focusBorderColor="purple.300"
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            type="text"
            focusBorderColor="purple.300"
          />
          <Input
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            placeholder="Creator Name"
            type="text"
            focusBorderColor="purple.300"
          />
          <Select
            focusBorderColor="purple.300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Input
            accept="image/*"
            required
            id="chooseAvatar"
            type="file"
            focusBorderColor="purple.300"
            onChange={changeImageHandler}
          />
          {imagePrev && (
            <Image src={imagePrev} boxSize="64" objectFit="contain" />
          )}
          <Button isLoading={false} w="full" colorScheme="purple" type="submit">
            Create
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default CreateCourse;
