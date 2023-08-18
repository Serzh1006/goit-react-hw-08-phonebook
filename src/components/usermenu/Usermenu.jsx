import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { userLogOut } from '../../servises/userAuth/userLogOutApi';
import css from './usermenu.module.css';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.usermenu}>
      <Avatar className={css.avatar}>
        <AvatarBadge boxSize="18px" bg="green.500" />
      </Avatar>
      <p>Welcome,{email}</p>
      <button
        className={css.logoutbtn}
        onClick={() => dispatch(userLogOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
