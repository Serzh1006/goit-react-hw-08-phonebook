import { Link } from 'react-router-dom';
import css from './authNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Link className={css.login} to="/login">
        Login
      </Link>
      <Link className={css.register} to="/register">
        Register
      </Link>
    </div>
  );
};

export default AuthNav;
