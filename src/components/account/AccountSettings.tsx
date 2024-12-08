import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useAuthStore } from '../../store/useAuthStore';
import { BackButton } from '../ui/BackButton';
import { DeleteAccountModal } from './DeleteAccountModal';

export function AccountSettings() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/auth');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    
    setIsDeleting(true);
    try {
      await deleteUser(user);
      navigate('/auth', { replace: true });
    } catch (error) {
      console.error('Failed to delete account:', error);
      alert('Failed to delete account. Please try again.');
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <BackButton />
      </div>

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-serif text-primary mb-8">Account Settings</h1>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Signed in as</p>
            <p className="font-medium">{user?.email}</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Privacy Policy
            </button>

            <button
              onClick={handleSignOut}
              className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Log Out
            </button>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="w-full p-4 text-left text-red-600 bg-white border border-red-100 rounded-lg hover:bg-red-50 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      <DeleteAccountModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteAccount}
        isDeleting={isDeleting}
      />
    </div>
  );
}