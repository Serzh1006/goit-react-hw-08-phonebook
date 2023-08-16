import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { userLogOut } from '../../servises/userAuth/userLogOutApi';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome,{name}</p>
      <button onClick={() => dispatch(userLogOut())} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
