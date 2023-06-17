export const addEditQuestion = ({ id, topic, questionName, questionContent }) => {
  return {
    type: 'questions/addEditQuestion',
    payload: {
      id,
      topic,
      questionName,
      difficulty: 88,
      answerRate: '75%',
      totalAnswers: 1156,
      questionContent,
    },
  };
};

export const deleteQuestion = questionId => {
  return {
    type: 'questions/deleteQuestion',
    payload: questionId,
  };
};
