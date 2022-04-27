import { Navigate } from 'react-router-dom';

const PrivateRouters = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to='/login' />;
};

export default PrivateRouters;
