import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/selectors';
import UserMenu from 'components/usermenu/Usermenu';
import Navigation from 'components/navigation/Navigation';
import AuthNav from 'components/authNav/AuthNav';
import css from './appbar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
