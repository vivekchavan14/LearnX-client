import React, { useState } from 'react';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Button,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'XYZ',
    email: 'xyz@gmail.com',
    created: String(new Date().toISOString()),
  };

  const [isChangePhotoModalOpen, setIsChangePhotoModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const openChangePhotoModal = () => {
    setIsChangePhotoModalOpen(true);
  };

  const closeChangePhotoModal = () => {
    setIsChangePhotoModalOpen(false);
  };

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Here, you can upload the file to a server or handle it as needed
      // For this example, we'll update the profile picture in the UI
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} src={profilePicture} />
          <Button colorScheme={'purple'} variant="ghost" onClick={openChangePhotoModal}>
            Change Profile Picture
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name : " fontWeight={'bold'} />
            <Text children={user.name} fontWeight={'bold'} />
          </HStack>
          <HStack>
            <Text children="Email : " fontWeight={'bold'} />
            <Text children={user.email} fontWeight={'bold'} />
          </HStack>
          <HStack>
            <Text children="Created at : " fontWeight={'bold'} />
            <Text children={user.created.split('T')[0]} fontWeight={'bold'} />
          </HStack>
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <ChangePhotoBox isOpen={isChangePhotoModalOpen} onClose={closeChangePhotoModal} onChangeImage={changeImage} />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, onChangeImage }) {
  const handleImageChange = (e) => {
    onChangeImage(e);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form>
              <VStack spacing={'8'}>
                <Avatar boxSize={'48'} />
                <Input type={'file'} onChange={handleImageChange} />
                <Button w="full" colorScheme={'purple'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
