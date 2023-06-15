import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';

const CardPage = () => {
    return (
      <Container>
        Card
        <Link to="/">
          to the main page
        </Link>
      </Container>
    );
};

export default CardPage;
