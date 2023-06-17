import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import CardPage from 'pages/CardPage';
import NotFoundPage from 'pages/NotFoundPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/" component={<LoginPage />} />
          }
        />
        <Route path="/register" element={<p>Empty route</p>} />
        <Route
          path="/card"
          element={
            <PrivateRoute redirectTo="/login" component={<CardPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
