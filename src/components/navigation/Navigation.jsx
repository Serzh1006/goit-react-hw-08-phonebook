import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { selectLoggedIn } from '../../redux/selectors';
import css from './navigation.module.css';

const Navigation = () => {
  const IsLoggedIn = useSelector(selectLoggedIn);

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <Link className={css.homeLink} to="/">
          Home
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        {IsLoggedIn && (
          <Link className={css.contactsLink} to="/contacts">
            Contacts
          </Link>
        )}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navigation;
