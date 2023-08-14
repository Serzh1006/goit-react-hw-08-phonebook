import { useDispatch } from 'react-redux';
import { userLogin } from 'servises/userLoginApi';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmitLogin = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataFormLogin = Object.fromEntries(formData);
    dispatch(userLogin(dataFormLogin));
    e.currentTarget.reset();
  };

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={onSubmitLogin}>
        <input
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Enter email"
        />
        <input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
