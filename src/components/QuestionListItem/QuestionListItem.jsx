import {
  EditLink,
  DeleteButton,
} from './QuestionListItem.styled';
import { RiDeleteBin6Line, RiPencilLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteQuestion } from 'redux/questions/actions';

const QuestionListItem = ({ question }) => {
    const {
        id,
        topic,
        questionName,
        difficulty,
        answerRate,
        totalAnswers,
    } = question;
    console.log(id, topic, questionName, difficulty, answerRate, totalAnswers);
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteQuestion(id));
    
  return (
    <>
      <p>{id}</p>
      <p>{topic}</p>
      <p>{questionName}</p>
      <p>{difficulty}</p>
      <p>{answerRate}</p>
      <p>{totalAnswers}</p>
      <EditLink to="/card" id={id} state={{ id }}>
        <RiPencilLine size={28} />
      </EditLink>
      <DeleteButton type="button" onClick={handleDelete}>
        <RiDeleteBin6Line size={28} />
      </DeleteButton>
    </>
  );
};

export default QuestionListItem;
