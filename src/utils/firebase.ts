import { FirebaseError } from 'firebase/app';

export const handleFirebaseError = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/invalid-api-key':
        return 'Invalid Firebase configuration. Please contact support.';
      case 'auth/invalid-credential':
        return 'Invalid credentials. Please check your email and password.';
      case 'auth/requires-recent-login':
        return 'This operation requires recent authentication. Please log in again.';
      case 'auth/invalid-argument':
        return 'Invalid request. Please try again.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      default:
        console.error('Unhandled Firebase error:', error);
        return 'An unexpected error occurred. Please try again.';
    }
  }
  return 'An unexpected error occurred. Please try again.';
};

export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return error instanceof FirebaseError;
};