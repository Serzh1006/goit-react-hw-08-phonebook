import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/selectors';
import { Link } from 'react-router-dom';

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
