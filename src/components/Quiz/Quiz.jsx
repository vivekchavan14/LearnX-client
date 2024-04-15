import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

function Quiz({ title, questions, correctAnswers }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedAnswer,
    });
  };

  const handleSubmit = () => {
    // Calculate the score by comparing selected answers to correct answers
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === correctAnswers[index]) {
        calculatedScore += 1;
      }
    });

    // Update the score state and mark the quiz as submitted
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md" mb={4}>
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      {questions.map((question, index) => (
        <FormControl key={index} isDisabled={isSubmitted} mb={2}>
          <FormLabel>{question}</FormLabel>
          <RadioGroup
            onChange={(selectedAnswer) =>
              handleAnswerChange(index, selectedAnswer)
            }
            value={selectedAnswers[index]}
          >
            <Radio value="Option A">Option A</Radio>
            <Radio value="Option B">Option B</Radio>
            <Radio value="Option C">Option C</Radio>
            <Radio value="Option D">Option D</Radio>
          </RadioGroup>
        </FormControl>
      ))}
      {!isSubmitted && (
        <Button mt={2} colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      )}
      {isSubmitted && (
        <Text mt={2}>
          Quiz Submitted! Your Score: {score}/{questions.length}
        </Text>
      )}
    </Box>
  );
}

export default Quiz;
