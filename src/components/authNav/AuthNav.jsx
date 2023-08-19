import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import css from './authNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Breadcrumb fontWeight="small" fontSize="m">
        <BreadcrumbItem>
          <Link className={css.login} to="/login">
            Login
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link className={css.register} to="/register">
            Register
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default AuthNav;
