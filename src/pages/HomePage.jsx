import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';

const HomePage = () => {
    return (
      <Container>
        Home
        <Link to="/card">to the card page</Link>
      </Container>
    );
};

export default HomePage;
