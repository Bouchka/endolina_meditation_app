import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import { AuthTabs } from './components/auth/AuthTabs';
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
          <Route path="/auth" element={<AuthTabs />} />
          <Route
            path="/"
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