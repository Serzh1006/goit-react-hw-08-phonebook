import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { userLogin } from '../../servises/userAuth/userLoginApi';
// import { selectLoggedIn } from '../../redux/selectors';

const Login = () => {
  const dispatch = useDispatch();
  // const isLoggedin = useSelector(selectLoggedIn);

  // if (isLoggedin) return <Navigate to={'/contacts'} />;

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
