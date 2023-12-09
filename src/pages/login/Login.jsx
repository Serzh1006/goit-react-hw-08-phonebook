import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer } from 'react-toastify';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../servises/userAuth/userLoginApi';
import css from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const initialsValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(7).required(),
  });

  const onSubmitLogin = (values, { resetForm }) => {
    dispatch(userLogin(values));
    resetForm();
  };

  return (
    <>
      <h2 className={css.loginTitle}>Login</h2>
      <Formik
        initialValues={initialsValues}
        validationSchema={schema}
        onSubmit={onSubmitLogin}
      >
        <Form className={css.formLogin}>
          <Field
            className={css.inputLogin}
            as={Input}
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
          />
          <ErrorMessage
            className={css.loginError}
            component="div"
            name="email"
          />
          <Field
            className={css.inputLogin}
            as={Input}
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Password"
          />
          <ErrorMessage
            className={css.passwordError}
            component="div"
            name="password"
          />
          <Button className={css.btnLogin} type="submit" colorScheme="teal">
            Sign in
          </Button>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Login;
