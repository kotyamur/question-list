import { Link } from 'react-router-dom';
import { Form, ContentInput, ButtonWrapper } from './QuestionForm.styled';
import Button from 'components/Button/Button';

const QuestionForm = () => {
  return (
    <Form autoComplete="off">
      <label htmlFor="question-id">ID</label>
      <input type="text" name="question-id" id="question-id" />
      <label htmlFor="question-topic">Topic</label>
      <input type="text" name="question-topic" id="question-topic" />
      <label htmlFor="question-name">Question name</label>
      <input type="text" name="question-name" id="question-name" />
      <label htmlFor="question-content">Question content</label>
      <ContentInput
        name="question-content"
        id="question-content"
        placeholder=" "
      ></ContentInput>

      <ButtonWrapper>
        <Link to="/">
          <Button type="button">Cancel</Button>
        </Link>
        <Link to="/">
          <Button type="submit">Submit</Button>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

export default QuestionForm;
