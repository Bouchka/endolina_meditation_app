import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import { SignInPage } from './components/auth/SignInPage';
import { SignUpPage } from './components/auth/SignUpPage';
import { MeditationList } from './components/MeditationList';
import { Player } from './components/Player';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { AccountSettings } from './components/account/AccountSettings';
import { PrivacyPolicy } from './components/account/PrivacyPolicy';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" replace />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/create-your-account" element={<SignUpPage />} />
          <Route
            path="/meditations"
            element={
              <PrivateRoute>
                <MeditationList />
              </PrivateRoute>
            }
          />
          <Route
            path="/meditation/:id"
            element={
              <PrivateRoute>
                <Player />
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <AccountSettings />
              </PrivateRoute>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PrivateRoute>
                <PrivacyPolicy />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}