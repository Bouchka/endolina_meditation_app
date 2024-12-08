import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export function AuthHeader() {
  const { user } = useAuthStore();
  
  if (!user) return null;

  return (
    <div className="flex justify-end p-4">
      <Link to="/account">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
          {user.email?.[0].toUpperCase() || 'U'}
        </div>
      </Link>
    </div>
  );
}