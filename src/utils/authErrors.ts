export const getAuthErrorMessage = (error: Error): string => {
  const errorCode = (error as any)?.code;

  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Please sign in instead.';
    
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password. Please check your credentials and try again.';
    
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    
    case 'auth/requires-recent-login':
      return 'Please verify your password to continue with this sensitive operation.';
    
    default:
      return 'An error occurred. Please try again.';
  }
};