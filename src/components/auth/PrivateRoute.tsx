import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useAuthStore(state => state.user);
  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
}