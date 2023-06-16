import Container from 'components/Container/Container';
import QuestionForm from 'components/QuestionForm/QuestionForm';

const CardPage = () => {
    return (
        <Container>
            <p style={{
                textAlign: 'center',
                textTransform: 'uppercase',
                marginBottom: 20,
            }}>
                Edit/Create question
            </p>
            <QuestionForm />
      </Container>
    );
};

export default CardPage;
