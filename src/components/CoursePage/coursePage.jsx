import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import videoUrl from './../../assets/videos/vv.gif';
import Lecture from './../Lecture/Lecture';
import Quiz from './../Quiz/Quiz';

function CoursePage() {
  const { id } = useParams();

  // Sample data for lectures and quizzes (replace with your actual data)
  const courseContent = [
    {
      type: 'lecture',
      title: 'Lecture 1',
      videoUrl,
    },
    {
      type: 'quiz',
      title: 'Quiz 1',
      questions: ['Question 1', 'Question 2', 'Question 3'],
      correctAnswers: ['Option A', 'Option B', 'Option C'],
    },
    {
      type: 'lecture',
      title: 'Lecture 2',
      videoUrl: 'video2.mp4',
    },
    {
      type: 'quiz',
      title: 'Quiz 2',
      questions: ['Question 4', 'Question 5', 'Question 6'],
      correctAnswers: ['Option D', 'Option A', 'Option B'],
    },
    // Add more lectures and quizzes for other courses
  ];

  // Filter content based on the route parameter "id"
  const filteredContent = courseContent.filter((item) =>
    item.title.toLowerCase().includes(id.toLowerCase())
  );

  const lectures = filteredContent.filter((item) => item.type === 'lecture');
  const quizzes = filteredContent.filter((item) => item.type === 'quiz');

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        {/* Render all lectures */}
        {lectures.map((lecture, index) => (
          <div key={index}>
            <Lecture
              title={lecture.title}
              videoUrl={lecture.videoUrl}
              // No need to pass comments or comment submission function here
            />
          </div>
        ))}
      </Box>
      <Box>
        {/* Render associated quizzes for each lecture */}
        {lectures.map((lecture, index) => {
          const associatedQuiz = quizzes.find(
            (quiz) => quiz.title === `Quiz ${index + 1}`
          );
          if (associatedQuiz) {
            return (
              <Quiz
                key={index}
                title={associatedQuiz.title}
                questions={associatedQuiz.questions}
                correctAnswers={associatedQuiz.correctAnswers}
              />
            );
          }
          return null;
        })}
      </Box>
    </Grid>
  );
}

export default CoursePage;
