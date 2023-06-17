import { Link } from 'react-router-dom';
import { Form, SubmitButton, Field, ErrorMessage } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice';
import { Formik } from 'formik';
import { loginSchema } from 'validation';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(actions);
    
    dispatch(setUser(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <label>
            E-mail
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>

          <SubmitButton type="submit" disabled={isSubmitting}>
            Login
          </SubmitButton>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
