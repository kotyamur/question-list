import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';
import QuestionListForm from 'components/QuestionListForm/QuestionListForm';
import Button from 'components/Button/Button';

const HomePage = () => {
    return (
      <Container>
        <Link
          to="/card"
          style={{ textAlign: 'end', display: 'block', marginBottom: 20 }}
        >
          <Button type="button">Create new</Button>
        </Link>
        <QuestionListForm />
      </Container>
    );
};

export default HomePage;
