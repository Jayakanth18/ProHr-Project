import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/Authcontext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
