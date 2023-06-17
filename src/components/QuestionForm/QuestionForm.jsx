import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, ContentInput, ButtonWrapper } from './QuestionForm.styled';
import Button from 'components/Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEditQuestion } from 'redux/questions/actions';
import { selectQuestions } from 'redux/questions/selectors';

const QuestionForm = () => {
  const questions = useSelector(selectQuestions);
  const location = useLocation();
  console.log(location.state);
  const getQuestionById =
    location.state?.id
      ? questions.find(questions => questions.id === location.state.id)
      : null;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(getQuestionById?.id || '');
  const [topic, setTopic] = useState(getQuestionById?.topic || '');
  const [questionName, setQuestionName] = useState(
    getQuestionById?.questionName || ''
  );
  const [questionContent, setQuestionContent] = useState(
    getQuestionById?.questionContent || ''
  );

  const handleChangeId = e => setId(e.currentTarget.value);
  const handleChangeTopic = e => setTopic(e.currentTarget.value);
  const handleChangeQuestion = e => setQuestionName(e.currentTarget.value);
  const handleChangeQuestionContent = e => setQuestionContent(e.currentTarget.value);

  const handleSubmit = event => {
    event.preventDefault();
    
    const newQuestion = {
      id,
      topic,
      questionName,
      questionContent,
    };
    console.log(newQuestion);
    dispatch(addEditQuestion(newQuestion));
    reset();
    navigate('/');
  };

  const reset = () => {
    setId('');
    setTopic('');
    setQuestionName('');
    setQuestionContent('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="question-id">ID</label>
      <input
        type="text"
        name="question-id"
        id="question-id"
        required
        value={id}
        onChange={handleChangeId}
      />
      <label htmlFor="question-topic">Topic</label>
      <input
        type="text"
        name="question-topic"
        id="question-topic"
        required
        value={topic}
        onChange={handleChangeTopic}
      />
      <label htmlFor="question-name">Question name</label>
      <input
        type="text"
        name="question-name"
        id="question-name"
        required
        value={questionName}
        onChange={handleChangeQuestion}
      />
      <label htmlFor="question-content">Question content</label>
      <ContentInput
        name="question-content"
        id="question-content"
        placeholder=" "
        value={questionContent}
        onChange={handleChangeQuestionContent}
      ></ContentInput>

      <ButtonWrapper>
        <Link to="/">
          <Button type="button">Cancel</Button>
        </Link>
        <Button type="submit">Submit</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default QuestionForm;
