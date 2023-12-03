import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { selectLoggedIn } from '../../redux/selectors';
import css from './navigation.module.css';

const StyledLink = styled(NavLink)`
  color: aliceblue;

  &.active {
    color: orange;
  }
`;

const Navigation = () => {
  const IsLoggedIn = useSelector(selectLoggedIn);

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <StyledLink className={css.homeLink} to="/">
          Home
        </StyledLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        {IsLoggedIn && (
          <StyledLink className={css.contactsLink} to="/contacts">
            Contacts
          </StyledLink>
        )}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navigation;
