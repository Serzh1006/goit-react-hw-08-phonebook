import { useDispatch } from 'react-redux';
import { userSignUp } from 'servises/userSignUpApi';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmitRegister = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataForm = Object.fromEntries(formData);
    dispatch(userSignUp(dataForm));
    e.currentTarget.reset();
  };

  return (
    <>
      <h2>Register Page</h2>
      <form onSubmit={onSubmitRegister}>
        <input name="name" type="text" autoComplete="off" placeholder="Name" />

        <input
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
