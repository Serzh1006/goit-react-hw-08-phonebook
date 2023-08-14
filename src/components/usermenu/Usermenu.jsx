import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

const UserMenu = () => {
  const { name } = useSelector(selectUser);

  return (
    <div>
      <p>{name}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
