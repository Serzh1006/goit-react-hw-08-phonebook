import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { userLogOut } from '../../servises/userAuth/userLogOutApi';
import css from './usermenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.usermenu}>
      <Avatar className={css.avatar}>
        <AvatarBadge boxSize="18px" bg="green.500" />
      </Avatar>
      <p className={css.welcomeText}>Welcome,{name}</p>

      <Button
        className={css.logoutbtn}
        onClick={() => dispatch(userLogOut())}
        type="button"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="pink"
        variant="outline"
        size="sm"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
