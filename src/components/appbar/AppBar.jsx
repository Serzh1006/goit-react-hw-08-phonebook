import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/selectors';
import UserMenu from 'components/usermenu/Usermenu';
import Navigation from 'components/navigation/Navigation';
import AuthNav from 'components/authNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
