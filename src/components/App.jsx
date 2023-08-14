import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout/Layout';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/homepage/HomePage'));
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const ContactsPage = lazy(() => import('pages/contacts/ContactsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default App;
