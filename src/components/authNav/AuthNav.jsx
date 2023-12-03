import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import css from './authNav.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Breadcrumb fontWeight="small" fontSize="m">
        <BreadcrumbItem>
          <StyledLink className={css.login} to="/login">
            Sign in
          </StyledLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <StyledLink className={css.register} to="/register">
            Sign up
          </StyledLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default AuthNav;
