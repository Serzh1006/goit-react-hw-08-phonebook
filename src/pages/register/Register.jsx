import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { userSignUp } from 'servises/userAuth/userSignUpApi';
import css from './register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const initialsValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(7).required(),
  });

  const onSubmitRegister = (values, { resetForm }) => {
    dispatch(userSignUp(values));
    resetForm();
  };

  return (
    <>
      <h2 className={css.registerTitle}>Register</h2>
      <Formik
        initialValues={initialsValues}
        validationSchema={schema}
        onSubmit={onSubmitRegister}
      >
        <Form className={css.registerForm}>
          <Field
            className={css.inputRegister}
            as={Input}
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Name"
          />
          <ErrorMessage className={css.nameError} component="div" name="name" />

          <Field
            className={css.inputRegister}
            as={Input}
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
          />

          <ErrorMessage
            className={css.emailError}
            component="div"
            name="email"
          />
          <Field
            className={css.inputRegister}
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

          <Button className={css.btnRegister} type="submit" colorScheme="teal">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
