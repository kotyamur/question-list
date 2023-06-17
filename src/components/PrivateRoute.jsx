import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsUserLogined } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsUserLogined)
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
