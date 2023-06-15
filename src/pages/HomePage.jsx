import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
      <div>
        Home
        <Link to="/card">
          to the card page
        </Link>
      </div>
    );
};

export default HomePage;
