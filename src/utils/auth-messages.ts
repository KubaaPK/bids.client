export const authMessage = (error: any): string => {
  if (error.code === 'auth/user-not-found' || 'auth/wrong-password') {
    return 'Nieprawidłowy adres email lub hasło.';
  }
  return error.message;
};
