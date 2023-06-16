import {
  ListForm,
  ListItem,
  EditLink,
  DeleteButton,
} from './QuestionListForm.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiPencilLine } from 'react-icons/ri';

const QuestionListForm = () => {
    const questionsInfo = ['AF79C', 'Anatomy', '2.1 Basics', 88, '75%', 1156 ]
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
      <ListItem>
        {questionsInfo.map(item => (
          <p>{item}</p>
        ))}
        <EditLink to="/card">
          <RiPencilLine size={28} />
        </EditLink>
        <DeleteButton type="button">
          <RiDeleteBin6Line size={28} />
        </DeleteButton>
      </ListItem>
    </ListForm>
  );
};

export default QuestionListForm;
