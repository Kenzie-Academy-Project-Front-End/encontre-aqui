import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';

export const ProtectedAdminRoutes = () => {
  const { loginAdmin } = useContext(AdminContext);
  const location = useLocation();
  if (loginAdmin) {
    return <div>Carregando Página!</div>;
  }
  return loginAdmin ? (
    <Outlet />
  ) : (
    <Navigate to='/admin' replace state={{ from: location }} />
  );
};
