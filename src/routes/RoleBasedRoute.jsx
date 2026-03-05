import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RoleBasedRoute = ({ children, roles = [] }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
  if (roles.length > 0 && !roles.includes(user?.role)) return <Navigate to="/dashboard" replace />;
  return children;
};

export default RoleBasedRoute;