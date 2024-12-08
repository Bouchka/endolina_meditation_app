import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { Logo } from '../ui/Logo';

export function SignInPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (showForgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-gray-50 rounded-xl">
          <Logo />
          <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-gray-50 rounded-xl">
        <Logo />
        <LoginForm />
        <div className="text-center mt-6 space-y-2">
          <div>
            <Link 
              to="/create-your-account" 
              className="text-primary hover:underline"
            >
              Don't have an account yet? Sign up
            </Link>
          </div>
          <div>
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-sm text-primary hover:underline"
            >
              I forgot my password 🥺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}