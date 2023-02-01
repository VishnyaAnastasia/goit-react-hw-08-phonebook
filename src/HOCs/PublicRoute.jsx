import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/phonebook" /> : children;
};

export default PublicRoute;
