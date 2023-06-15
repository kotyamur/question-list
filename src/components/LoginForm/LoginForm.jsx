import { Link } from 'react-router-dom';
import { Form, SubmitButton } from './LoginForm.styled';

const LoginForm = () => {
  return (
    <Form autoComplete="off">
      <label>
        E-mail
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <Link to="/">
        <SubmitButton type="submit">Login</SubmitButton>
      </Link>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
