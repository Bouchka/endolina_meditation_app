import { useState } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { Modal } from '../ui/Modal';
import { auth } from '../../config/firebase';
import { getAuthErrorMessage } from '../../utils/authErrors';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  isDeleting: boolean;
}

export function DeleteAccountModal({ isOpen, onClose, onConfirm, isDeleting }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isReauthenticating, setIsReauthenticating] = useState(false);

  const handleConfirm = async () => {
    if (!auth.currentUser?.email) return;
    
    setIsReauthenticating(true);
    setError(null);
    
    try {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      await onConfirm();
    } catch (error) {
      setError(getAuthErrorMessage(error as Error));
    } finally {
      setIsReauthenticating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-xl">⚠️</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Delete Account</h3>
          <p className="mt-2 text-sm text-gray-500">
            Are you sure you want to delete your account? This action cannot be undone
            and all your meditation progress will be lost.
          </p>
        </div>

        <div className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm your password to continue
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleConfirm}
              disabled={isReauthenticating || isDeleting || !password}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 
                       transition-colors disabled:opacity-50"
            >
              {isReauthenticating ? 'Verifying...' : 
               isDeleting ? 'Deleting Account...' : 
               'Delete My Account'}
            </button>
            <button
              onClick={onClose}
              disabled={isReauthenticating || isDeleting}
              className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg 
                       hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}