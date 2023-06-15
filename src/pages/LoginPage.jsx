import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
      <div>
        Login
        <Link to="/">
          to the main page
        </Link>
        <Link to="/register">
          Sign up
        </Link>
      </div>
    );
};

export default LoginPage;
