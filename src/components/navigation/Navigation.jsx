import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn } from '../../redux/selectors';

const Navigation = () => {
  const IsLoggedIn = useSelector(selectLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>
      {IsLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
