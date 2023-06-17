import { Link } from 'react-router-dom';
import { Form, SubmitButton } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      setUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        E-mail
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      {/* <Link to="/"> */}
        <SubmitButton type="submit">Login</SubmitButton>
      {/* </Link> */}
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
