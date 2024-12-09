import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { Logo } from '../ui/Logo';

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (showForgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <Logo />
          <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <Logo />
        
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === 'login'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === 'signup'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="mt-8">
          {activeTab === 'login' ? (
            <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
          ) : (
            <SignUpForm />
          )}
        </div>
      </div>
    </div>
  );
}