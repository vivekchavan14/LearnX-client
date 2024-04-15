import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Text,
  Input,
  Stack,
} from '@chakra-ui/react';

function Lecture({ title, videoUrl }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const markAsCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const addComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md" mb={4}>
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      <video
        width="100%"
        controls
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={videoUrl}
      ></video>
      <Button
        mt={2}
        colorScheme={isCompleted ? 'green' : 'blue'}
        onClick={markAsCompleted}
      >
        {isCompleted ? 'Completed' : 'Mark as Completed'}
      </Button>
      <Heading as="h3" size="md" mt={4}>
        Comments
      </Heading>
      {comments.map((comment, index) => (
        <Text key={index} mt={2}>
          {comment}
        </Text>
      ))}
      <Stack direction="row" mt={2}>
        <Input
          placeholder="Add a comment..."
          value={commentText}
          onChange={handleCommentChange}
        />
        <Button onClick={addComment} colorScheme="teal">
          Add Comment
        </Button>
      </Stack>
    </Box>
  );
}

export default Lecture;
