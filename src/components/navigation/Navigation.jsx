import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn } from '../../redux/selectors';
import css from './navigation.module.css';

const Navigation = () => {
  const IsLoggedIn = useSelector(selectLoggedIn);

  return (
    <nav className={css.navigation}>
      <Link to="/">Home</Link>
      {IsLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
