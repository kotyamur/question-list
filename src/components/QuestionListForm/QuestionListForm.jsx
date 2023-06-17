import { ListForm, ListItem } from './QuestionListForm.styled';
import { useSelector } from 'react-redux';
import { selectQuestions } from 'redux/questions/selectors';
import QuestionListItem from 'components/QuestionListItem/QuestionListItem';

const QuestionListForm = () => {
  const questions = useSelector(selectQuestions);
  console.log(questions);

  return (
    <ListForm>
      <ListItem>
        <p>ID</p>
        <p>Topic</p>
        <p>Question</p>
        <p>Difficulty</p>
        <p>Answer rate</p>
        <p>Total answers</p>
      </ListItem>
      {questions.map(question => (
        <ListItem key={question.id}>
          <QuestionListItem question={question} />
        </ListItem>
      ))}
    </ListForm>
  );
};

export default QuestionListForm;
