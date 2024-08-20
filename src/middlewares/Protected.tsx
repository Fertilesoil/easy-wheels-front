import { Navigate } from 'react-router-dom';
import { useUserStore } from '../stores/UserStore';
import React from 'react';

type ProtectedRouteProps = {
  element: React.ReactElement;
};

const Protected: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = useUserStore((state) => state.userStatus.isLogged);

  return isLoggedIn ? element : <Navigate to="/login" replace />;
}

export default Protected