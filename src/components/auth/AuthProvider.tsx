import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useAuthStore } from '../../store/useAuthStore';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore(state => state.setUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user && window.location.pathname === '/auth') {
        navigate('/', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [setUser, navigate]);

  return <>{children}</>;
}