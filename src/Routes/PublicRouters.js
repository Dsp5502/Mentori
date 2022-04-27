import { Navigate } from 'react-router-dom';

const PublicRouters = ({ isLoggedIn, children }) => {
  return !isLoggedIn ? children : <Navigate to='/*' />;
};

export default PublicRouters;
