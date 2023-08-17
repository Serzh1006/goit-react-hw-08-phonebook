import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { userLogOut } from '../../servises/userAuth/userLogOutApi';
import css from './usermenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.usermenu}>
      <p>Welcome,{name}</p>
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
