import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLogined } from 'redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsUserLogined);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
