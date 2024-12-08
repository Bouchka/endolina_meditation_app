import { Link } from 'react-router-dom';
import { SignUpForm } from './SignUpForm';
import { Logo } from '../ui/Logo';

export function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-gray-50 rounded-xl">
        <Logo />
        <SignUpForm />
        <div className="text-center mt-6">
          <Link 
            to="/sign-in" 
            className="text-primary hover:underline"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}