const initialState = {
  questions: [
    {
      id: 'AF79C',
      topic: 'Anatomy',
      questionName: '2.1 Basics',
      difficulty: 88,
      answerRate: '75%',
      totalAnswers: 1156,
      questionContent: '',
    },
    {
      id: 'AF78C',
      topic: 'Anatomy',
      questionName: '2.1 Basics',
      difficulty: 89,
      answerRate: '73%',
      totalAnswers: 1156,
      questionContent: '',
    },
  ],
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'questions/addEditQuestion':
      return {
        ...state,
          questions: state.questions.map(quest => {
            if (quest.id !== action.payload.id) {
            return quest;
          }
          return {
            ...quest,
            id: action.payload.id,
            topic: action.payload.topic,
            questionName: action.payload.questionName,
            questionContent: action.payload.questionContent,
          };
        }),
      };
    case 'questions/deleteQuestion':
      return {
        ...state,
        questions: state.questions.filter(
          questions => questions.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
