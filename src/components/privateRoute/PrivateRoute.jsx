import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/selectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
