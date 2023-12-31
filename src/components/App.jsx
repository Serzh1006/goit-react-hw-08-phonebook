import { Routes, Route, Navigate } from 'react-router-dom';
import LoaderMain from './loaderMain/LoaderMain';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './layout/Layout';
import PrivateRoute from './privateRoute/PrivateRoute';
import PublicRoute from './publicRoute/PublicRoute';
import { userRefresh } from 'servises/userAuth/userRefreshApi';
import { selectIsRefresh } from '../redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import css from './app.module.css';

const HomePage = lazy(() => import('../pages/homepage/HomePage'));
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const ContactsPage = lazy(() => import('pages/contacts/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return isRefresh ? (
    <div className={css.refreshLoader}>
      <LoaderMain />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="/">
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default App;
